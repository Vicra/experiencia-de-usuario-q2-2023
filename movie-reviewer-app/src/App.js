import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./pages/NavigationBar";
import Login from "./components/Login";
import Board from "./pages/Board/Board";

const About = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Board} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
