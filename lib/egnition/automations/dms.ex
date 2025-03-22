defmodule Egnition.Automations.Dms do
  use Ecto.Schema
  import Ecto.Changeset

  schema "dms" do
    field :sender_id, :string
    field :receiver, :string
    field :created_at, :utc_datetime
    field :message, :string

    belongs_to :automation, Egnition.Automations.Automation

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(dms, attrs) do
    dms
    |> cast(attrs, [:sender_id, :receiver, :created_at, :message])
    |> validate_required([:sender_id, :receiver, :created_at, :message])
    |> foreign_key_constraint(:automation_id)
  end
end
