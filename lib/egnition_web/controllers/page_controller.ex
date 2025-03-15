defmodule EgnitionWeb.PageController do
  use EgnitionWeb, :controller

  def home(conn, _params) do
    conn
    |> put_layout(false)
    |> render_inertia("home")
  end
end
