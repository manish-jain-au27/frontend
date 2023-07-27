
import React from 'react'
import Login from '../Users/Forms/Login';
const AdminRoutes = ({children}) => {
//GET user from localstoreage
const user = JSON.parse(localStorage.getItem ("userInfo"));
const isAdmin = user?.userFound?.isAdmin? true : false;
if (!isAdmin) return <h1>Admin only access denied</h1>;
    return <>
    {children}
    </>
};

export default AdminRoutes
