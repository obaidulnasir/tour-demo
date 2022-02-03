import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import useAuth from '../../hook/useAuth';

const Login = () => {
    const {googleSignIn, user}=useAuth()
    const location = useLocation();
    const history = useHistory();
    return (
        <div>
            <h3>this is login page</h3>

            <button onClick={()=>googleSignIn(location, history)}>click me</button>
            <h4>{user?.email}</h4>
        </div>
    );
};

export default Login;