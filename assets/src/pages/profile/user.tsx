import { CurrentUser } from "@/types";
import React from "react";

function User({ current_user }: { current_user: CurrentUser }) {
  return <div>{current_user?.name}</div>;
}

export default User;
