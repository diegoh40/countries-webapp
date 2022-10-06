import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import Info from './pages/Details';
import Countries from './pages/Countries';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="cont">
          <Navbar />
          <hr />
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route exact path="/Info">
              <Info />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
