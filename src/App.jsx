import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
