defmodule Egnition.Repo.Migrations.CreateIntegrations do
  use Ecto.Migration

  def change do
    create table(:integrations) do
      add :name, :string
      add :token, :string
      add :expires_at, :utc_datetime
      add :instagram_id, :string
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps(type: :utc_datetime)
    end

    create index(:integrations, [:user_id])
  end
end
