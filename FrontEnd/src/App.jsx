import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Onboarding from './pages/Onboarding/Onboarding';
import Addtank from './pages/Addtank/Addtank';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path="/onboarding" element={<Onboarding/>}></Route>
        <Route path='/addTank' element={<Addtank/>}></Route>
      </Routes>
    </div>
  )
}
