import React from 'react';
import "./Dashboard.css"
import useAuth from '../../hook/useAuth';

const Dashboard = () => {
    const {user} = useAuth();
    return (
        <div>
            <div className="text-center">
            <h3>this is dashboard</h3>
            <div>
                <img className="avatar" src={user?.photoURL} alt="img" />
            <h2>{user?.email}</h2>
            </div>
                
                
            <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;