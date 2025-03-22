defmodule Egnition.Repo.Migrations.CreateTrigger do
  use Ecto.Migration

  def change do
    create table(:trigger) do
      add :type, :string
      add :automation_id, references(:automations, on_delete: :delete_all)

      timestamps(type: :utc_datetime)
    end


    create index(:trigger, [:automation_id])
  end
end
