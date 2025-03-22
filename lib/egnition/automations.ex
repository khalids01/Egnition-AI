defmodule Egnition.Automations do
  import Ecto.Query
  alias Egnition.Repo
  alias Egnition.Automations.Automation

  def list_user_automations(user_id) do
    Automation
    |> where(user_id: ^user_id)
    |> Repo.all()
  end

  def get_automation!(id), do: Repo.get!(Automation, id)

  def create_automation(attrs \\ %{}) do
    %Automation{}
    |> Automation.changeset(attrs)
    |> Repo.insert()
  end

  def update_automation(%Automation{} = automation, attrs) do
    automation
    |> Automation.changeset(attrs)
    |> Repo.update()
  end

  def delete_automation(%Automation{} = automation) do
    Repo.delete(automation)
  end

  # def toggle_automation(%Automation{} = automation) do
  #   update_automation(automation, %{active: !automation.active})
  # end
end
