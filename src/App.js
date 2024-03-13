import React from 'react';
import './App.css';
import {  BrowserRouter, Routes, Route  } from 'react-router-dom';
import Layout from './Components/layout';
import Supplements from './Pages/Supplements/supplements'
import Home from "./Pages/home"
import About from "./Pages/about"
import SupplementLayout from './Components/supplementlayout';
import SupplementDetails from './Pages/Supplements/supplementDetails';
import SupplementUses from './Pages/Supplements/supplementUses';
import SupplementSideEffects from './Pages/Supplements/supplementSideEffects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='*' element={<h1>404: Page not found</h1>}/>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/supplements/:id" element={<SupplementLayout />}>
            <Route index element={<SupplementDetails />} />
            <Route path="overview" element={<SupplementDetails />} />
            <Route path="uses" element={<SupplementUses />} />
            <Route path="sideeffects" element={<SupplementSideEffects />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
