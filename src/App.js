import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadComponents from './hoc/loadComponents';
const Home = loadComponents(() => import('./page/Home'));
const Search = loadComponents(() => import('./page/Search'))

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
