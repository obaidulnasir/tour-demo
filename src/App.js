import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Contact from './components/Contact/Contact';
import Umrah from './components/Packages/Umrah/Umrah';
import Tour from './components/Packages/Tour/Tour';
import Footer from './components/shared/Footer/Footer';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import SinglePackage from './components/Packages/SinglePackage/SinglePackage';
import BookNow from './components/shared/BookNow/BookNow';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/umrahPackages">
              <Umrah></Umrah>
            </Route>
            <Route path="/tourPackages">
              <Tour></Tour>
            </Route>
            <Route path="/package/:id">
              <SinglePackage></SinglePackage>
            </Route>
            <PrivateRoute path="/bookNow/:id">
              <BookNow></BookNow>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
