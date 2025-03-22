defmodule Egnition.Automations.Trigger do
  use Ecto.Schema
  import Ecto.Changeset

  schema "trigger" do
    field :type, :string #comment automation / dm automation
    belongs_to :automation, Egnition.Automations.Automation

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(trigger, attrs) do
    trigger
    |> cast(attrs, [:type])
    |> validate_required([:type])
    |> foreign_key_constraint(:automation_id)
  end
end
