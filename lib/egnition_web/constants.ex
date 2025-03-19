defmodule EgnitionWeb.Constants do
  @max_age 60 * 60 * 24 * 60
  @remember_me_cookie "_egnition_web_user_remember_me"
  @remember_me_options [sign: true, max_age: @max_age, same_site: "Lax"]

  def max_age, do: @max_age
  def remember_me_cookie, do: @remember_me_cookie
  def remember_me_options, do: @remember_me_options
end
