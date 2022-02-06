import React from 'react';
import "./Dashboard.css"
import useAuth from '../../hook/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="text-center">
                <h3>this is dashboard</h3>
                <div>
                    <img className="avatar" src={user?.photoURL} alt="img" />
                    <h2>{user?.email}</h2>
                </div>
                <div>
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary" type="button">My Order</button>
                        <button className="btn btn-primary" type="button">Add Package</button>
                    </div>
                </div>
                <hr />


                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;