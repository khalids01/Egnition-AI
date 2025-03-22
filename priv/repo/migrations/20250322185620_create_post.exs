defmodule Egnition.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:post) do
      add :post_id, :string
      add :caption, :string
      add :media, :string
      add :media_type, :string
      add :automation_id, references(:automations, on_delete: :nothing)

      timestamps(type: :utc_datetime)
    end

    create index(:post, [:automation_id])
  end
end
