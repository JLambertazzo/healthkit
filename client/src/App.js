
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import './views/Dashboard/Dashboard'
import Dashboard from "./views/Dashboard/Dashboard";
import MyForms from "./views/MyForms/MyForms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <Dashboard/>
          </Route>
            <Route exact path='/myforms'>
                <MyForms/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
