defmodule Egnition.Repo.Migrations.CreateDms do
  use Ecto.Migration

  def change do
    create table(:dms) do
      add :sender_id, :string
      add :receiver, :string
      add :created_at, :utc_datetime
      add :message, :string
      add :automation_id, references(:automations, on_delete: :delete_all)

      timestamps(type: :utc_datetime)
    end

    create index(:dms, [:automation_id])
  end
end
