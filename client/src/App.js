import React from 'react';
import { Route } from "react-router-dom"
import './App.css';
import axios from 'axios'

import Login from "./components/Login"
import Register from "./components/Register"
import Users from "./components/Users"

function App() { 
  return (
    <div>
      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
    </div>
  )
  
}


export default App;
