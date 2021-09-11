import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './components/Nav';
import Wrapper from './components/Wrapper';

import Login from './views/Login';
import Main from './views/Main';
import MyAccount from './views/MyAccount';
import MyList from './views/MyList';
import Show from './views/Show';


function App() {
  return (
    <Router>
      <Wrapper>
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/my-account' component={MyAccount} />
          <Route path='/my-list' component={MyList} />
          <Route path='/show' component={Show} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
