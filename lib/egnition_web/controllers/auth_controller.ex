defmodule EgnitionWeb.AuthController do
  use EgnitionWeb, :controller

  import Plug.Conn
  import Phoenix.Controller

  alias EgnitionWeb.Helpers
  alias EgnitionWeb.Constants
  alias Egnition.Accounts

  @remember_me_cookie Constants.remember_me_cookie()
  @remember_me_options Constants.remember_me_options()

  def register_page(conn, _params) do
    conn
    |> render_inertia("auth/register.tsx")
  end

  def register(conn, params) do
    case Accounts.register_user(params) do
      {:ok, user} ->
        token = Accounts.generate_user_session_token(user)

        conn
        |> put_flash(:success, "Account created successfully")
        |> put_session(:user_token, token)
        |> redirect(to: signed_in_path(conn))

      {:error, changeset} ->
        conn
        |> assign_errors(changeset)
        |> redirect(to: ~p"/register")
    end
  end

  def login_page(conn, _params) do
    conn
    |> put_layout(false)
    |> render_inertia("auth/login.tsx")
  end

  def login(conn, %{"email" => email, "password" => password}, params \\ %{}) do
    user_return_to = get_session(conn, :user_return_to)

    case Accounts.validate_login_data(email, password) do
      {:ok, user} ->
        token = Accounts.generate_user_session_token(user)

        conn
        |> renew_session()
        |> put_session(:user_token, token)
        |> maybe_write_remember_me_cookie(token, params)
        |> put_flash(:info, "Logged in successfully.")
        |> redirect(to: user_return_to || signed_in_path(conn))

      {:error, message} ->
        conn
        |> put_status(422)
        |> Helpers.assign_flash(:error, message)
        |> render_inertia("auth/login.tsx", %{
          errors: %{
            email: ["Invalid email or password"],
            password: ["Invalid email or password"]
          }
        })
    end
  end

  def log_out_user(conn) do
    user_token = get_session(conn, :user_token)
    user_token && Accounts.delete_user_session_token(user_token)

    conn
    |> renew_session()
    |> delete_resp_cookie(@remember_me_cookie)
    |> redirect(to: ~p"/")
  end

  def fetch_current_user(conn, _opts) do
    case ensure_user_token(conn) do
      {nil, conn} ->
        conn
      {token, conn} ->
        user = token && Accounts.get_user_by_session_token(token)
        assign(conn, :current_user, user)
        assign_prop(conn, :current_user, user)
    end
  end

  defp renew_session(conn) do
    delete_csrf_token()

    conn
    |> configure_session(renew: true)
    |> clear_session()
  end

  defp signed_in_path(_conn), do: ~p"/"

  defp maybe_write_remember_me_cookie(conn, token, %{"remember_me" => "true"}) do
    put_resp_cookie(conn, @remember_me_cookie, token, @remember_me_options)
  end

  defp maybe_write_remember_me_cookie(conn, _token, _params) do
    conn
  end

  defp ensure_user_token(conn) do
    if token = get_session(conn, :user_token) do
      {token, conn}
    else
      conn = fetch_cookies(conn, signed: [@remember_me_cookie])

      if token = conn.cookies[@remember_me_cookie] do
        {token, Helpers.put_token_in_session(conn, token)}
      else
        {nil, conn}
      end
    end
  end

  def redirect_if_user_is_authenticated(conn, _opts) do
    if conn.assigns[:current_user] do
      conn
      |> redirect(to: signed_in_path(conn))
      |> halt()
    else
      conn
    end
  end
end
