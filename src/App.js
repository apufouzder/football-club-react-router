import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import ClubDetails from "./components/ClubDetails/ClubDetails";
import Contact from "./components/Contact/Contact";
import Home from './components/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/club/:idTeam">
          <ClubDetails />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
