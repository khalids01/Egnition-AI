defmodule EgnitionWeb.Helpers do
  @moduledoc """
  This module is invoked by your endpoint in case of errors on HTML requests.

  See config/config.exs.
  """
  import Plug.Conn
  import Phoenix.Controller

  def put_token_in_session(conn, token) do
    conn
    |> put_session(:user_token, token)
  end

  def assign_flash(conn, key, message) do
    conn
    |> put_flash(key, message)
    |> assign(:flash, %{key => message})
  end
end
