import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Slider from "./components/Slider";

import NavigationBar from "./pages/NavigationBar/NavigationBar";
import Login from "./components/Login";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Slider />
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>
      {/* <Slider /> */}
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
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
