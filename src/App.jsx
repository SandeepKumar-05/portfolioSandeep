import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css'
import Home from './HomePage/Home';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
