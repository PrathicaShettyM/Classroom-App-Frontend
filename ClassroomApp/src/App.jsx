import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import Home from './pages/Home'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
  )
}

export default App
