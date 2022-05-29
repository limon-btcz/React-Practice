import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
);