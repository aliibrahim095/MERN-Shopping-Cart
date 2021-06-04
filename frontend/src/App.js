import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// screens
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

// components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
