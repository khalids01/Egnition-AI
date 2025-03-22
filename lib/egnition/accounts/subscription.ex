defmodule Egnition.Accounts.Subscription do
  use Ecto.Schema
  import Ecto.Changeset

  schema "subscriptions" do
    field :status, Ecto.Enum, values: [:active, :canceled, :past_due], default: :active
    field :plan, Ecto.Enum, values: [:free, :pro, :enterprise], default: :free
    field :current_period_start, :utc_datetime
    field :current_period_end, :utc_datetime
    field :cancel_at, :utc_datetime
    field :stripe_subscription_id, :string
    field :stripe_customer_id, :string

    belongs_to :user, Egnition.Accounts.User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(subscription, attrs) do
    subscription
    |> cast(attrs, [
      :status,
      :plan,
      :current_period_start,
      :current_period_end,
      :cancel_at,
      :stripe_subscription_id,
      :stripe_customer_id,
      :user_id
    ])
    |> validate_required([
      :status,
      :plan,
      :current_period_start,
      :current_period_end,
      :user_id
    ])
    |> foreign_key_constraint(:user_id)
  end
end
