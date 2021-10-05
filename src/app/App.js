import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import requests from '../request';

import Nav from './components/Nav';
import Wrapper from './components/Wrapper';

import Login from './views/Login';
import Main from './views/Main';
import MyAccount from './views/MyAccount';
import Show from './views/Show';
import MovieGrid from './views/MovieGrid';


function App() {
  return (
    <Router>
      <Wrapper>
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/my-account' component={MyAccount} />
          <Route path='/my-list' render={(props) => (
            <MovieGrid
              {...props}
              title={'My List'}
              fetchUrl={requests.fetchTopRated}
            />
          )}
          />
          <Route path='/top-movies' render={(props) => (
            <MovieGrid
              {...props}
              title={'Top Movies'}
              fetchUrl={requests.fetchTopRated}
            />
          )}
          />
          <Route path='/new-releases' render={(props) => (
            <MovieGrid
              {...props}
              title={'New Releases'}
              fetchUrl={requests.fetchNetflixOriginals}
            />
          )}
          />
          <Route path='/show' component={Show} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
