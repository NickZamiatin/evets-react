import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import LoandingPage from './components/LoandingPage'
import NotFound from './components/NotFound'
import Events from './containers/Events'
import ViewOneEvent from './containers/ViewOneEvent'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
      <main className='container'>
      <Switch>
        <Route exact path="/" component={LoandingPage} />
        <Route  exact path="/events" component={Events} />
        <Route  path="/events/:id" component={ViewOneEvent} />
        <Route  path="*" component={NotFound} />
      </Switch>
      </main>
      </div>
    );
  }
}

export default App;
