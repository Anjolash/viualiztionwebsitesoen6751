import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing'
import Welcome from './pages/Welcome'
import Numericalmatrix from './pages/Numericalmatrix';
import Interactive from './pages/Interactive';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element = {<Welcome />} />
          <Route path="/NumMatrix" element = {<Numericalmatrix />} />
          <Route path="/2DVis" element = {<Landing />} />
          <Route path="/Interactive" element = {<Interactive />} />
      </Routes>
    </Router>
  )
}

export default App
