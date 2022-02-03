import React from 'react';
import useAuth from '../../hook/useAuth';

const Home = () => {
    const {googleSignIn} = useAuth();
    return (
        <div>
            <h3>this is home</h3>

            <button onClick={googleSignIn}>click me</button>
        </div>
    );
};

export default Home;