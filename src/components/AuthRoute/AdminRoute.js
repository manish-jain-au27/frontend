import React from 'react'

const AdminRoute = ({children}) => {
    //get user from localstorage
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = user?.userFound?. isAdmin ? true : false;
  if (!isAdmin) return <h1>access denied,admin only</h1>;
  return (
    <>
    {children}
    </>
  )
}

export default AdminRoute