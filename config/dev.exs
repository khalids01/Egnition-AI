import Config

# Configure your database
config :egnition, Egnition.Repo,
  username: System.get_env("USER") || "root",
  password: System.get_env("PASSWORD") || "admin",
  hostname: System.get_env("HOST") || "localhost",
  database: System.get_env("DATABASE") || "egnition",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we can use it
# to bundle .js and .css sources.
config :egnition, EgnitionWeb.Endpoint,
  # Binding to loopback ipv4 address prevents access from other machines.
  # Change to `ip: {0, 0, 0, 0}` to allow access from other machines.
  http: [ip: {127, 0, 0, 1}, port: 4000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "Z1ggTCqsIbFxEMuqyTblmWdtnc9od2gRcAeptWtq6VziIoWanVHBVvmbI/Fl5y/H",
  watchers: [
    esbuild: {Esbuild, :install_and_run, [:egnition, ~w(--sourcemap=inline --watch)]},
    ssr: {Esbuild, :install_and_run, [:ssr, ~w(--sourcemap=inline --watch)]},
    tailwind: {Tailwind, :install_and_run, [:egnition, ~w(--watch --poll=2000)]}
    # node: ["node_modules/esbuild/bin/esbuild", "--watch", cd: Path.expand("../assets", __DIR__)]
  ]

config :egnition, EgnitionWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/(?!uploads/).*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/egnition_web/(controllers|live|components)/.*(ex|heex)$"
    ]
  ]

config :egnition, dev_routes: true

config :logger, :console, format: "[$level] $message\n"

config :phoenix, :stacktrace_depth, 20

config :phoenix, :plug_init_mode, :runtime

config :phoenix_live_view,
  debug_heex_annotations: true,
  enable_expensive_runtime_checks: true

config :swoosh, :api_client, false
