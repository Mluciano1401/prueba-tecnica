import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from '../Modules/Home/Home'
import Login from '../Modules/Login/Login'
import Register from '../Modules/Regiter/Register'
import PrivateRoute from './PrivateRoute/PrivateRoute'

export const AppRouter = () => {
    return (
    <Router>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/list' element={<PrivateRoute><Home/></PrivateRoute>}/>

        <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Router>
    )
}