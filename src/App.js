import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './login/Login';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          {/* <Login /> */}
          </Switch>
        </div>
     
    </Router>
  );
}

export default App;
