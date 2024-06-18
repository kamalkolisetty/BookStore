import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Freebook from './Freebook'

const Home = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
         
   <Banner/>
   <Freebook/>
   
    </div>
    </>
  )
}

export default Home