import Navbar from './components/Navbar/Navbar'
import Quizs from './pages/Quizs/Quizs'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import "./assets/css/app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Quizs></Quizs>
        <Routes>
          <Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
