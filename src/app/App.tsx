import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BrowsePage from '../pages/browse/browse.page';
import SearchPage from '../pages/search/search.page';
import WatchPage from '../pages/watch/watch.page';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Redirect to="/browse" />} />
        <Route path='/browse' component={BrowsePage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/watch' component={WatchPage} />
      </Switch>
    </Router>
  );
}

export default App;
