defmodule Egnition.Automations.Listener do
  use Ecto.Schema
  import Ecto.Changeset

  schema "listener" do
    field :prompt, :string
    field :comment_reply, :string
    field :dm_count, :integer
    field :comment_count, :integer
    field :listener , Ecto.Enum, values: [:smartai, :messages]

    belongs_to :automation, Egnition.Automations.Automation

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(listener, attrs) do
    listener
    |> cast(attrs, [:prompt, :comment_reply, :dm_count, :comment_count])
    |> validate_required([:prompt, :comment_reply, :dm_count, :comment_count])
    |> foreign_key_constraint(:automation_id)
  end
end
