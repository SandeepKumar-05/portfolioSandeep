import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route index element={<Navbar/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
