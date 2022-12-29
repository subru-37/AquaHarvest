import React, { useState, useContext, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Onboarding from "./pages/Onboarding/Onboarding";
import Dashboard from "./pages/dashboard/Dashboard";
import Addfarm from "./pages/addfarm/Addfarm";
import Marketplace from './pages/marketplace/Marketplace';
import Signup from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
// import { initialize } from "../firebase";

export const ThemeContext = createContext();
export default function App() {
  // initialize();
  const [state, setState] = useState({
    Name: "",
    Bio: "",
    Location: "",
  });
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <div>
        <Routes>
          <Route exact path='/' element={<Landing />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/onboarding' element={<Onboarding />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/addFarm' element={<Addfarm />}></Route>
          <Route path='/marketplace' element={<Marketplace/>}></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
