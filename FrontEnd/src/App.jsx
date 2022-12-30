import React, { useState, useContext, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Landing from "./pages/landing/Landing";
import Onboarding from "./pages/Onboarding/Onboarding";
import Dashboard from "./pages/dashboard/Dashboard";
import Addfarm from "./pages/addfarm/Addfarm";
import Marketplace from "./pages/marketplace/Marketplace";
import Signup from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import initialize from "../firebase";
import Addtank from "./pages/addtank/Addtank";
import TankPage from "./pages/tank/TankPage";
export const ThemeContext = createContext();
export default function App() {
  initialize();
  const [state, setState] = useState({
    Name: "yo",
    bio: "yo",
    location: "Kochi",
    tname: "",
    farmName: "fresh farm",
    fishes: "",
    email: "john@gmail.com",
    password: "1234",
    confirmPassword: "1234",
  });
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <div>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/onboarding' element={<Onboarding />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/addFarm' element={<Addfarm />}></Route>
          <Route path='/addTank' element={<Addtank />}></Route>
          <Route path='/marketplace' element={<Marketplace />}></Route>
          <Route path='/tank/:tankName' element={<TankPage/>}></Route>
      </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
