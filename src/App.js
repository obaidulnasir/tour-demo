import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
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
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
