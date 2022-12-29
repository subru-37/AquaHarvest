import React,{useState, useContext, createContext} from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Onboarding from './pages/Onboarding/Onboarding';
import Dashboard from './pages/dashboard/Dashboard'
import Addfarm from './pages/addfarm/Addfarm';
import Addtank from './pages/addtank/Addtank';
export const ThemeContext  = createContext();
export default function App() {
  const [state, setState] = useState({
    Name:'',
    Bio: '',
    Location: '',
    tname:'',
    fishes:''
})
  return (
    <ThemeContext.Provider value={{state,setState}}>
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path="/onboarding" element={<Onboarding/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path='/addFarm' element={<Addfarm/>}></Route>
        <Route path='/addTank' element={<Addtank/>}></Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
  )
}
