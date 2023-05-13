import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import LoginForm from "./LoginForm";
import SearchAppBar from "./Search";

const ProtectedRoute: React.FC<any> = ({
  component: Component,
  path,
  ...rest
}) => {
  const isLoggedIn = !!sessionStorage.getItem("token");

  return (
    <Route
      path={path}
      {...rest}
      render={(props: any) =>
        isLoggedIn && path === props.match.url ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Auth>
            <Route exact path="/signup" component={Signin} />
            <Route exact path="/LoginForm" component={LoginForm} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={SearchAppBar} />
          </Auth>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
