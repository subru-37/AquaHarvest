import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './pages/landing/Landing';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </div>
  )
}
