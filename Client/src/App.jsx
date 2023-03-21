import Layout from "./components/Laytout";
import Questions from "./pages/Questions/Questions";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./components/AuthLayout";
import { useAuthContext } from "./hooks/useAuthContext";
import ResetLayout from "./pages/ForgotPassword/ResetLayout";
import FormEmail from "./pages/ForgotPassword/FormEmail";



import "./assets/css/app.css"
function App() {
  const { state } = useAuthContext();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={state.user ? <Layout /> : <Navigate to="auth" />} />
          <Route path="/learn/unit/:id" element={<Questions />} />
          <Route path ="/reset-password" element={<ResetLayout/>}>
            <Route index element = {<FormEmail/>}/>
          </Route>
          <Route path="auth" element={!state.user ? <AuthLayout /> : <Navigate to="/" />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
