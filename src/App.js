import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Login from './pages/login/Login';
import Ragister from './pages/ragister/Ragister';


function App(){
  return (

  <BrowserRouter>
 
  <Routes>
    <Route path="/" element={<> <Header/><Home/> </>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/ragister" element={<Ragister/>}/>
  </Routes>
  
  </BrowserRouter>

  );
}

export default App;
