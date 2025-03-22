defmodule Egnition.Repo.Migrations.CreateListener do
  use Ecto.Migration

  def change do
    create table(:listener) do
      add :prompt, :string
      add :comment_reply, :string
      add :dm_count, :integer
      add :comment_count, :integer
      add :automation_id, references(:automations, on_delete: :delete_all)

      timestamps(type: :utc_datetime)
    end

    create index(:listener, [:automation_id])
  end
end
