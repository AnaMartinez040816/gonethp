import './App.scss';

import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";


// import { Logomobile }      from './Components/logomobile/Logomobile';
// import { CharacterDisplay} from  './Components/characterDisplay/CharacterDisplay';
import {SelectOption} from './Components/selectOption/SelectOption'

import {CharacterFilterStaff}   from './Components/characterFilterStaff/CharacterFilterStaff'
import {CharacterFilterStudents} from './Components/characterFilterStudents/CharacterFilterStudents'

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
          <Route path="/staff">
            <CharacterFilterStaff />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}  

export default App;
