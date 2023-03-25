import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthContextProvider from "./context/authReducer/authContext";
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  // </React.StrictMode>
  ,
)
