defmodule Egnition.Automations.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "post" do
    field :post_id, :string
    field :caption, :string
    field :media, :string
    field :media_type, Ecto.Enum, values: [:image, :video, :reel]

    belongs_to :automation, Egnition.Automations.Automation

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:post_id, :caption, :media, :media_type])
    |> validate_required([:post_id, :caption, :media, :media_type])
    |> foreign_key_constraint(:automation_id)
  end
end
