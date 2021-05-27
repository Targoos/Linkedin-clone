import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";
import { auth } from "../firebase/firebaseConfig";
import { AuthRouter } from "./AuthRouter";
import Body from "../components/Body";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth.uid) {
        dispatch(
          login({
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
        setIsLoggedIn(true);
      } else {
        dispatch(logout());
        setIsLoggedIn(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          isAuthenticated={isLoggedIn}
          component={AuthRouter}
        />
        <PrivateRoute
          exact
          path="/"
          isAuthenticated={isLoggedIn}
          component={Body}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
