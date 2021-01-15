
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './layput/Navbar';
import Notfound from './pages/Notfound';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={View} />
        <Route component={Notfound} />
      </Switch>
    </Router>
    
  );
}

export default App;
