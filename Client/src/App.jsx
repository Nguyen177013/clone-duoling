import Layout from "./components/Laytout";
import Questions from "./pages/Questions/Questions";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./components/AuthLayout";
import { useAuthContext } from "./hooks/useAuthContext";
import ResetLayout from "./components/ResetLayout";
import Quizs from "./pages/Quizs/Quizs";
import FormEmail from "./pages/ForgotPassword/FormEmail";
import FormReset from "./pages/ForgotPassword/FormReset";
import Blogs from "./pages/Blogs/Blogs";
import BlogCreate from "./pages/Blogs/BlogCreate";
import "./assets/css/app.css"
function App() {
  const { state } = useAuthContext();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={state.user ? <Layout /> : <Navigate to="auth" />}>
            <Route index element={<Quizs />} />
            <Route path="learn/unit/:id" element={<Questions />} />
            <Route path="blogs" >
              <Route index element={<Blogs/>}></Route>
              <Route path="create" element ={<BlogCreate/>}></Route>
            </Route>
          </Route>
          <Route path="/reset-password" element={<ResetLayout />}>
            <Route index element={<FormEmail />} />
            <Route path="change-password" element={<FormReset />} />
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
