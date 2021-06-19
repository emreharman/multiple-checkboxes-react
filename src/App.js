
import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import ListMembers from "./components/ListMembers";
import AddMember from './components/AddMember';
import EditMember from './components/EditMember';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={ListMembers} />
          <Route path="/add-member" component={AddMember}/>
          <Route path="/edit-member/:id" component={EditMember}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
