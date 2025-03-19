defmodule EgnitionWeb.Router do
  use EgnitionWeb, :router

  import EgnitionWeb.AuthController

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {EgnitionWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
    plug EgnitionWeb.Plugs.ThemePlug
    plug Inertia.Plug
  end

  pipeline :ensure_authenticated do
    plug EgnitionWeb.Plugs.EnsureAuthenticated
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", EgnitionWeb do
    pipe_through :browser

    get "/", PageController, :home
  end

  # Other scopes may use custom stacks.
  scope "/api", EgnitionWeb do
    pipe_through :api
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:egnition, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: EgnitionWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  ## Authentication routes

  scope "/", EgnitionWeb do
    pipe_through [:browser, :redirect_if_user_is_authenticated]

    post "/register", AuthController, :register
    get "/register", AuthController, :register_page
    post "/login", AuthController, :login
    get "/login", AuthController, :login_page
  end

  scope "/", EgnitionWeb do
    pipe_through [:browser, :ensure_authenticated]
    get "/me", AuthController, :fetch_current_user
    delete "/logout", AuthController, :logout
  end

end
