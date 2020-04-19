import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css';
import App from './App';
import Page1 from "./components/page1";
import getWord from "./components/getWord";
import addWord from "./components/addWord";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {Page1}/>
      <Route path="/addWord" component = {addWord}/>
      <Route path="/getWord" component = {getWord}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

