defmodule Egnition.Repo.Migrations.CreateSubscriptions do
  use Ecto.Migration

  def change do
    create table(:subscriptions) do
      add :status, :string, null: false
      add :plan, :string, null: false
      add :current_period_start, :utc_datetime, null: false
      add :current_period_end, :utc_datetime, null: false
      add :cancel_at, :utc_datetime
      add :stripe_subscription_id, :string
      add :stripe_customer_id, :string
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps(type: :utc_datetime)
    end

    create index(:subscriptions, [:user_id])
    create unique_index(:subscriptions, [:stripe_subscription_id])
  end
end
