import React from 'react'
import {BrowserRouter,Navigate ,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Course from './Components/Course'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthProvider'
import { useContext } from 'react' 
import About from './Components/About'
export default function App() {
  const [authUser,setAuthUser] = useContext(AuthContext)
 
  return (
   <div className='dark:bg-slate-900 dark:text-white'>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={authUser?<Course/>:<Navigate to='/signup'/> }/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    <Toaster />
  
   </div>
  )
}