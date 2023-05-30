import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import Signin from './Signin.tsx';
import Dashboard from './Dashboard.tsx';
import Auth from './Auth.tsx';
import LoginForm from './LoginForm.tsx';
import SearchAppBar from './Search.tsx';
import SingleListing from './SingleListing.tsx';
import ConfirmBooking from './ConfirmBooking.tsx';

const ProtectedRoute: React.FC<any> = (props) => {
  const { component: Component, path } = props;
  const isLoggedIn = !!sessionStorage.getItem('token');

  return (
    <Route
      path={path}
      render={(routeProps) => (isLoggedIn && path === routeProps.match.url ? (
        <Component
          history={routeProps.history}
          location={routeProps.location}
          match={routeProps.match}
        />
      ) : (
        <Redirect to="/dashboard" />
      ))}
    />
  );
};

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Auth>
          <Route exact path="/signup" component={Signin} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={SearchAppBar} />
          <Route exact path="/singleListing/:name" component={SingleListing} />
          <Route
            exact
            path="/confirm-booking/:name"
            component={ConfirmBooking}
          />
        </Auth>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;