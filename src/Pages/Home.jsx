import React from 'react'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from './MainSection';
import IconMenu from '../Components/IconMenu'
import Faq from "../Pages/Faq"
import Navbar2 from "../Components/Navbar2"



function Home() {
  return (
    <BrowserRouter>
       {/* <Navbar /> */}
       <Navbar2 />
         {/* <Routes>
           <Route path='/' element={<MainSection/>}/>
           <Route path="/login" element={<Login />}/>
         </Routes> */}
         <MainSection />
         <IconMenu/>
         <Faq />
        
  
    </BrowserRouter>
  )
}

export default Home;