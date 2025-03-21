import React from 'react'

function User(props: any) {
  console.log("User", props?.current_user);
  return (
    <div>User</div>
  )
}

export default User