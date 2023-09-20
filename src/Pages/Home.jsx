import React from 'react'
import Navbar from '../Components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from './MainSection';
import IconMenu from '../Components/IconMenu'
import { Faq } from './Faq';


function Home() {
  return (
    <BrowserRouter>
       <Navbar />
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