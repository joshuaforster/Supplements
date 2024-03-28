import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout';
import Supplements from './Pages/Supplements/supplements'
// Import statements for Home and About can be removed if not used elsewhere
// import Home from "./Pages/home"
// import About from "./Pages/about"
import SupplementLayout from './Components/supplementlayout';
import SupplementDetails from './Pages/Supplements/supplementDetails';
import SupplementDetailHeader from './Components/supplementDetailHeader';
import SupplementUses from './Pages/Supplements/supplementUses';
import SupplementSideEffects from './Pages/Supplements/supplementSideEffects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Supplements />} />
          {/* The Home and About routes have been removed. Uncomment or add them back if needed in the future */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/supplements/:id" element={<SupplementLayout />}>
            <Route index element={<SupplementDetails />} />
            <Route path="overview" element={<SupplementDetails />} />
            <Route path="uses" element={<SupplementUses />} />
            <Route path="sideeffects" element={<SupplementSideEffects />} />
          </Route>
          <Route path='*' element={<h1>404: Page Not Found</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
