defmodule Egnition.Repo.Migrations.AddRoleToUsers do
  use Ecto.Migration

  def up do
    execute "CREATE TYPE role AS ENUM ('admin', 'user')"

    alter table(:users) do
      add :role, :role, default: "user", null: false
    end
  end

  def down do
    alter table (:users) do
      remove :role
    end

    execute "DROP TYPE role"
  end
end
