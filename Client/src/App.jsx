import Layout from "./components/Laytout";
import Question from "./pages/Questions/Question";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/css/app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element ={<Layout/>}/>
          <Route path="/learn/unit/:id" element ={<Question></Question>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
