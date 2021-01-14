import './App.css';
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {Page1} from './pages/Page1';
import { Page2 } from './pages/Page2';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/admin">
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
