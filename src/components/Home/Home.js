import React from 'react';
import useAuth from '../../hook/useAuth';

const Home = () => {
    const {googleSignIn,user} = useAuth();
    return (
        <div>
            <h3>this is home</h3>

            <button onClick={googleSignIn}>click me</button>
            <h4>{user?.displayName}</h4>
        </div>
    );
};

export default Home;