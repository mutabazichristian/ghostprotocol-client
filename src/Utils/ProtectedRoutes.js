import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = (props) => {
    const { isLoggedIn } = props;
    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' replace={true} />
    );
}

export default ProtectedRoutes;