import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)
    console.log(user);

    const location = useLocation()
    console.log(location);

    if (loading) {
        return <div className='min-h-screen flex justify-center'>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    }

    if (user && user.email) {
        return children;
    } else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }

};

export default PrivateRoute;