
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Pages/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
