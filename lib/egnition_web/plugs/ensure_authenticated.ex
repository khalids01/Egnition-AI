defmodule EgnitionWeb.Plugs.EnsureAuthenticated do
  use EgnitionWeb, :controller

  alias EgnitionWeb.Constants

  alias EgnitionWeb.Helpers
  alias Egnition.Accounts

  @remember_me_cookie Constants.remember_me_cookie()

  def init(opts), do: opts

  def call(conn = %Plug.Conn{}, _opts) do
    {token, conn} = ensure_user_token(conn)

    case token do
      nil ->
        conn
        |> put_flash(:error, "Session, expired, please login again.")
        |> redirect(to: ~p"/login")
        |> halt()

      token ->
        user = Accounts.get_user_by_session_token(token)

        conn
        |> assign(:current_user, user)
        |> assign_prop(:current_user, user)
    end
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
end
