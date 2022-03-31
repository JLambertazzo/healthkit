
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import './views/Dashboard/Dashboard'
import Dashboard from "./views/Dashboard/Dashboard";
import MyForms from "./views/MyForms/MyForms";
import Profile from "./views/Profile/Profile";
import LogIn from "./views/Login/Login";
import SignUp from "./views/Signup/Signup";
import Report from "./views/Report/Report";
import { checkLoggedIn } from "./actions/user";
import {useState, useEffect} from "react";
import FillForm from "./views/FillForm/FillForm";
import ModifyForm from "./views/ModifyForm/ModifyForm";
import Input from './components/Inputs/Input';

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
          <Route exact path='/form'>
            {currentUser && (
              <FillForm user={currentUser}/>
            )}
            {!currentUser && (
              <LogIn/>
            )}
            </Route>
          <Route exact path='/createform'>
              {currentUser && <ModifyForm user={currentUser}/>}
              {!currentUser && <LogIn />}
          </Route>
          <Route exact path='/editform/:form_id'>
              {currentUser && <ModifyForm user={currentUser}/>}
              {!currentUser && <LogIn />}
          </Route>
          <Route exact path='/report/:form_id'>
              {currentUser && <Report />}
              {!currentUser && <LogIn />}
          </Route>
          
          <Route exact path='/testinputs'>
              <Input label="label" type="select" value="value" updateValue={() => {}} handleChange={() => {}} options={["one", "two", "three"]} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
