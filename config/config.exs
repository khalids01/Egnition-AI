# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :egnition,
  ecto_repos: [Egnition.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :egnition, EgnitionWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: EgnitionWeb.ErrorHTML, json: EgnitionWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Egnition.PubSub,
  live_view: [signing_salt: "fNq0WBjw"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :egnition, Egnition.Mailer, adapter: Swoosh.Adapters.Local

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.21.5",
  egnition: [
    args: ~w(
        src/app.tsx
      --bundle
      --target=es2020
      --outdir=../priv/static/assets
      --external:/fonts/*
      --external:/images/*
      --external:./node_modules/*
      --metafile=app.meta.json
        ),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# ssr: [
#   args: ~w(
#     src/ssr.tsx
#     --bundle
#     --platform=node
#     --outdir=../priv
#     --metafile=ssr.meta.json
#     --external:./node_modules/*
#     ),
#     # --external:phoenix --external:phoenix_html --external:phoenix_live_view
#   cd: Path.expand("../assets", __DIR__),
#   env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
# ]

# Configure tailwind (the version is required)
config :tailwind,
  version: "4.0.0",
  egnition: [
    args: ~w(
      --config=../assets/tailwind.config.js
      --input=src/styles/global.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# config/config.exs

config :inertia,
  endpoint: EgnitionWeb.Endpoint,
  static_paths: ["/assets/app.js"],
  default_version: "1",
  camelize_props: false,
  history: [encrypt: false],
  ssr: false,
  raise_on_ssr_failure: config_env() != :prod

import_config "#{config_env()}.exs"
