
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import './views/Dashboard/Dashboard'
import Dashboard from "./views/Dashboard/Dashboard";
import MyForms from "./views/MyForms/MyForms";
import Profile from "./views/Profile/Profile";
import LogIn from "./views/Login/Login";
import SignUp from "./views/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/login'>
            <LogIn/>
          </Route>
          <Route exact path = '/signup'>
            <SignUp/>
          </Route>
          <Route exact path='/'>
              <Dashboard/>
          </Route>
          <Route exact path='/myforms'>
              <MyForms/>
          </Route>
          <Route exact path='/profile'>
                <Profile/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
