import logo from "./logo.svg";
import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import ToDo from "./ToDo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// app is the root component ! in react app
// component tree starts with app component
// every other component should be nested in the app component and so on
// component is just a fun that return a jsx code and export it at the end of the file

function App() {
  return (
    // className is alternative to html calss att in jsx
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todo">
              <ToDo />
            </Route>
            <Route exact path="/about">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
