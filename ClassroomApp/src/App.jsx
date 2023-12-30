import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import Contact from './pages/ContactUs';
import Denied from './pages/Denied';
import Home from './pages/Home'
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Register from './pages/Register';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/denied' element={<Denied/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
  )
}

export default App
