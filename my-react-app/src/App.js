import './App.css';
import Home from './Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Signin from './Signin'
import Dashboard from './Dashboard'
import Auth from './Auth'

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        sessionStorage.getItem("token")
            ? <Component {...props} />
            : <Redirect to='/signin' />
    )} />
)

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Auth>
                        <Route exact path='/signin' component={Signin} />
                        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                    </Auth>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
