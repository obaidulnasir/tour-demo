import React from 'react';
import "./Dashboard.css"
import useAuth from '../../hook/useAuth';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrder from './MyOrder/MyOrder';
import AddPackage from './AddPackage/AddPackage';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
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
                        <Link to={`${url}`}>
                            <button className="btn btn-primary mx-1" type="button">My Order</button>
                        </Link>
                        <Link to={`${url}/addPackage`}>
                            <button className="btn btn-primary mx-1" type="button">Add Package</button>
                        </Link>
                    </div>
                </div>
                <hr />
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/addPackage`}>
                            <AddPackage></AddPackage>
                        </Route>
                    </Switch>
                </div>


                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;