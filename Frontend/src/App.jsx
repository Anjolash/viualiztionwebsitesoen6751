import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from '../trash/Landing'
import Welcome from './pages/Welcome'
import Numericalmatrix from './pages/Numericalmatrix';
import Interactive from './pages/Interactive';
import InputDataForm from './pages/InputDataForm';
import Result from './pages/Result';
import TwoDVis from './pages/TwoDVis';
import TwoDVisWithDescription from './pages/TwoDVisWithDescription';
import ThreeDVisualization from './pages/ThreeDVisualization';
import ResultsPosted from './pages/ResultsPosted';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element = {<Welcome />} />
          <Route path="/2DVis" element = {<TwoDVis />} />
          <Route path="/2DViswithdescription" element = {<TwoDVisWithDescription />} />
          <Route path="/3DVis" element = {<ThreeDVisualization />} />
          <Route path="/Interactive" element = {<Interactive />} />
          <Route path='/DataForm' element = {<InputDataForm /> } />
          <Route path='/Result' element = {<Result /> } />
          <Route path='/final' element = {<ResultsPosted />} />
      </Routes>
    </Router>
  )
}

export default App
