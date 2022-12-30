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
<<<<<<< HEAD
import ProdPage from "./pages/productPage/ProdPage"
// import { initialize } from "../firebase";
=======
import initialize from "../firebase";
>>>>>>> 8fafdf5a45f2da0e14a640c577251ae75e3cd06f

import Addtank from "./pages/addtank/Addtank";
export const ThemeContext = createContext();
export default function App() {
  initialize();
  const [state, setState] = useState({
    Name: "",
    Bio: "",
    Location: "",
    tname: "",
    fishes: "",
    Email: "",
    Password: "",
    CPassword: "",
  });
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <div>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/onboarding' element={<Onboarding />}></Route>
    {/*  <Route path='/product/1' element={<Product1 />}></Route> */}
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/addFarm' element={<Addfarm />}></Route>
<<<<<<< HEAD
          <Route path='/marketplace' element={<Marketplace/>}></Route>
          <Route path='/product' element={<ProdPage />}></Route>
=======
          <Route path='/addTank' element={<Addtank />}></Route>
          <Route path='/marketplace' element={<Marketplace />}></Route>
>>>>>>> 8fafdf5a45f2da0e14a640c577251ae75e3cd06f
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
