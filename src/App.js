import './App.css';
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Page2 } from './pages/Page2';
import {Page1} from './pages/Page1';
import { Page3 } from './pages/Page3';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/nav3">
      <Page3/>
      </Route>
      <Route path="/nav2">
      <Page2/>
      </Route>
      <Route path="/">
      <Page1/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
