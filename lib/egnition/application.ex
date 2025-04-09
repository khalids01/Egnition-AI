defmodule Egnition.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      EgnitionWeb.Telemetry,
      Egnition.Repo,
      {DNSCluster, query: Application.get_env(:egnition, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Egnition.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Egnition.Finch},

      # Start the SSR process pool
      # must specify a `path` option to locate the directory where the `ssr.js` file lives.
      # {Inertia.SSR, path: Path.join([Application.app_dir(:egnition), "priv"])},

      # Start a worker by calling: Egnition.Worker.start_link(arg)
      # {Egnition.Worker, arg},
      # Start to serve requests, typically the last entry
      EgnitionWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Egnition.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    EgnitionWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
