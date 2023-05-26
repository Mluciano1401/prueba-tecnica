import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import Home from './Modules/Home/Home'
import Login from './Modules/Login/Login'
import Register from './Modules/Regiter/Register'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/list' element={<PrivateRoute><Home/></PrivateRoute>}></Route>


    </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
