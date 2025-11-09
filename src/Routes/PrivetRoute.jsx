import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>;
    }
    if(user) {
        return children;
    }
    if(!user) {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
    }
};

export default PrivetRoute;