defmodule :"Elixir.Egnition.Repo.Migrations.Add-listener-in-listener-table" do
  use Ecto.Migration

  def change do
    alter table(:listener) do
      add :listener, :string
    end
  end
end
