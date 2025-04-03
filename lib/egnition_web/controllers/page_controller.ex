defmodule EgnitionWeb.PageController do
  use EgnitionWeb, :controller

  def home(conn, _params) do
    conn
    |> put_layout(false)
    |> render_inertia("home.tsx")
  end

  def profile(conn, _params) do
    conn
    |> put_layout(false)
    |> render_inertia("profile/user.tsx")
  end

  def dashboard(conn, _params) do
    conn
    |> put_layout(false)
    |> render_inertia("dashboard/page.tsx")
  end

  def settings(conn, _params) do
    conn
    |> put_layout(false)
    |> render_inertia("settings/page.tsx")
  end
end
