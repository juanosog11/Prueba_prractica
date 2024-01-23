import React from 'react'
import { useAuth } from './context/Authcontext'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const { loading,isAutheticated } = useAuth();


if (loading) {
    return <h1> Loading ...</h1>
}

if (!loading && !isAutheticated) {
    return <Navigate to='/login' replace/>
}
else {
    return <Outlet />;
}
}

export default ProtectedRoute