import React from 'react';
import useAuth from '../../hook/useAuth';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    const { user} = useAuth();
    return (
        <div>
            <Banner></Banner>
            <h4>{user?.displayName}</h4>
            <About />
            
        </div>
    );
};

export default Home;