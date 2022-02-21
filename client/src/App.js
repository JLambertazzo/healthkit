
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import './views/Dashboard/Dashboard'
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'>
              <Dashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
