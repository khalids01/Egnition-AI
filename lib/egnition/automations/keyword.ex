defmodule Egnition.Automations.Keyword do
  use Ecto.Schema
  import Ecto.Changeset

  schema "keyword" do
    field :word, :string

    belongs_to :automation, Egnition.Automations.Automation
    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(keyword, attrs) do
    keyword
    |> cast(attrs, [:word])
    |> validate_required([:word])
    |> foreign_key_constraint(:automation_id)
  end
end
