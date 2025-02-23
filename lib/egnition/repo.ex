defmodule Egnition.Repo do
  use Ecto.Repo,
    otp_app: :egnition,
    adapter: Ecto.Adapters.Postgres
end
