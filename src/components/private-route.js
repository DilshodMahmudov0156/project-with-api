import React from 'react';
import { Navigate, Outlet} from "react-router-dom";

function PrivateRoute({login}) {
    return (
        login? <Outlet/>: <Navigate to="/login"/>
    );
}

export default PrivateRoute;