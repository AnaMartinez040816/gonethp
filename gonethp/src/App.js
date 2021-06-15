import './App.scss';

import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import {SelectOption} from './Components/selectOption/SelectOption'
import {CharacterFilterStaff}   from './Components/characterFilterStaff/CharacterFilterStaff'
import {CharacterFilterStudents} from './Components/characterFilterStudents/CharacterFilterStudents'
import {CharacterFilterAlive}    from './Components/characterFilterAlive/CharacterFilterAlive'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="App-header">
            <p>Harry Potter</p>
          </div>
          <div className="App-title">
            <p>Selecciona tu filtro </p>
          </div>
        </header>
        <SelectOption />
        <Switch>
          <Route path="/students">
            <CharacterFilterStudents />
          </Route>
          <Route path="/alive">
            <CharacterFilterAlive />
          </Route>
          <Route path="/staff">
            <CharacterFilterStaff />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}  

export default App;
