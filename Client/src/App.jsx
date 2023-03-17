import Layout from "./components/Laytout";
import Questions from "./pages/Questions/Questions";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/css/app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element ={<Layout/>}/>
          <Route path="/learn/unit/:id" element ={<Questions/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
