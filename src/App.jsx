import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css'
import Home from './HomePage/Home';
import Projects from './Pages/Projects'
import Admin from './Pages/Admin';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
         <Routes>
          <Route path='projects' element={<Projects/>}/>
        </Routes>
          <Routes>
           <Route path='admin-987654321' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
