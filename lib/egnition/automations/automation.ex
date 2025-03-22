defmodule Egnition.Automations.Automation do
  use Ecto.Schema
  import Ecto.Changeset

  schema "automations" do
    field :name, :string
    field :active, :boolean, default: false
    #listener
    belongs_to :user, Egnition.Accounts.User
    has_many :dms, Egnition.Automations.Dms
    has_many :trigger, Egnition.Automations.Trigger
    has_many :listener , Egnition.Automations.Listener
    has_many :keyword, Egnition.Automations.Keyword
    has_many :post, Egnition.Automations.Post

    timestamps(type: :utc_datetime)
  end

  def changeset(automation, attrs) do
    automation
    |> cast(attrs, [:name, :active, :user_id])
    |> validate_required([:name, :user_id])
    |> validate_length(:name, min: 2, max: 50)
    |> foreign_key_constraint(:user_id)
    |> unique_constraint([:name, :user_id])
  end
end
