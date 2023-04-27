import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./pages/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
