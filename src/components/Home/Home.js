import React from 'react';
import useAuth from '../../hook/useAuth';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    const { user} = useAuth();
    return (
        <div>
            <Banner></Banner>
            <About />
            <h4>{user?.displayName}</h4>
        </div>
    );
};

export default Home;