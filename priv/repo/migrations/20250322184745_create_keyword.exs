defmodule Egnition.Repo.Migrations.CreateKeyword do
  use Ecto.Migration

  def change do
    create table(:keyword) do
      add :word, :string
      add :automation_id, references(:automations, on_delete: :delete_all)

      timestamps(type: :utc_datetime)
    end

    create index(:keyword, [:automation_id])
  end
end
