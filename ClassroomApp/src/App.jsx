import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Notfound from './pages/Notfound';
import Register from './pages/Register';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
  )
}

export default App
