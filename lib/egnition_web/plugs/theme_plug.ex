defmodule EgnitionWeb.Plugs.ThemePlug do
  import Plug.Conn

  def init(opts), do: opts

  def call(conn, _opts) do
    theme = conn.cookies["theme"] || "light"
    conn
    |> assign(:theme, theme)
  end
end
