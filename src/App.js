import logo from './logo.svg';
import './App.css';
import Router, {Route, Link} from './historyRoutes/router'

import HashRouter, { HashRoute } from './hashRoutes/router'
import Home from './routes/home';
import HashHome from './routes/hashHome';
import About from './routes/about';
import Users from './routes/user';
import HashUser from './routes/hashUser';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>history router</h3>
      <ul>
        <li>
          <a href="/home">home</a>
          <a href="/about">about</a>
          <a href="/user">user</a>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'/home'}>home</Link>
        </li>
        <li>
          <Link to={'/about'}>about</Link>
        </li>
        <li>
          <Link to={'/user'}>user</Link>
        </li>
      </ul>
      <Router>
        <Route path={'/home'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/user'} component={Users} />
      </Router>
      <hr/>
      <h3> hash router</h3>
      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#user">user</a>
        </li>
      </ul>
      <HashRouter>
        <HashRoute path={'#home'} component={HashHome} />
        <HashRoute path={'#about'} component={About} />
        <HashRoute path={'#user'} component={HashUser} />
      </HashRouter>

    </div>
  );
}


export default App;
