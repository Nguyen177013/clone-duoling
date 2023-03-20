import Layout from "./components/Laytout";
import Questions from "./pages/Questions/Questions";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from "./context/authReducer/authContext";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./components/AuthLayout";
import "./assets/css/app.css"

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/learn/unit/:id" element={<Questions />} />
            <Route path="auth" element ={<AuthLayout/>}>
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} /> 
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext>
  )
}

export default App
