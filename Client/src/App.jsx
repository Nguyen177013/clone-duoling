import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Quizs from './components/Quizs/Quizs'
import "./assets/css/app.css"

function App() {
  return (
    <div className="App">
        {/* Nav bar */}
        <Navbar></Navbar>
        {/* Main Quizs 
          => Levels
          =>Target ??        
        */}
        <Quizs></Quizs>
    </div>
  )
}

export default App
