defmodule Egnition.Integrations.Integration do
  use Ecto.Schema
  import Ecto.Changeset

  schema "integrations" do
    field :name, Ecto.Enum, values: [:instagram, :messenger, :youtube, :twitter]
    field :token, :string
    field :expires_at, :utc_datetime
    field :instagram_id, :string

    belongs_to :user, Egnition.Accounts.User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(integration, attrs) do
    integration
    |> cast(attrs, [:name, :token, :expires_at, :instagram_id])
    |> validate_required([:name, :token, :expires_at, :instagram_id])
    |> foreign_key_constraint(:user_id)
  end
end
