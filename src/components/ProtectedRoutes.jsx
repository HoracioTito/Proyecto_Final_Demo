import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    /* Control Login User */
    let login=false

    if ( localStorage.getItem("token")) {
        login=true
      }

    if(login){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }    
};

export default ProtectedRoutes;