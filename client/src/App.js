
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import './views/Dashboard/Dashboard'
import Dashboard from "./views/Dashboard/Dashboard";
import MyForms from "./views/MyForms/MyForms";
import Profile from "./views/Profile/Profile";
import LogIn from "./views/Login/Login";
import SignUp from "./views/Signup/Signup";
import { checkLoggedIn } from "./actions/user";
import {useState, useEffect} from "react";
import { Redirect} from 'react-router-dom';

function App() {
    const [currentUser, setCurrUser] = useState("")
    useEffect(()=> {
            checkLoggedIn(setCurrUser)
    }, [])

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
              {currentUser && (
                  <Dashboard user={currentUser}/>
              )}
              {!currentUser && (
                  <LogIn/>
              )}

          </Route>
          <Route exact path='/myforms'>
              {currentUser && (
                  <MyForms user={currentUser}/>
              )}
              {!currentUser && (
                  <LogIn/>
              )}
          </Route>
          <Route exact path='/profile'>
              {currentUser && (
                  <Profile user={currentUser}/>
              )}
              {!currentUser && (
                  <LogIn/>
              )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
