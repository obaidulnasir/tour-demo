// import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
//   const { user, isLoading } = useAuth();
  const {user }= useAuth();
//   if(isLoading){
//     return  <Spinner animation="border" variant="success" />
//   }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};


export default PrivateRoute;