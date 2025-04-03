defmodule EgnitionWeb.Plugs.RedirectIfUserIsAuthenticated do
  use EgnitionWeb, :controller
  alias EgnitionWeb.Constants
  alias EgnitionWeb.Helpers
  alias Egnition.Accounts

  alias EgnitionWeb.Plugs.EnsureAuthenticated

  def init(opts), do: opts

  def call(conn = %Plug.Conn{}, _opts) do
    {token, conn} = EnsureAuthenticated.ensure_user_token(conn)

    case token do
      nil ->
        conn

      token ->
        if user = Accounts.get_user_by_session_token(token) do
          conn
          |> put_flash(:info, "You are already logged in.")
          |> redirect(to: ~p"/")
          |> halt()
        else
          conn
        end
    end
  end
end
