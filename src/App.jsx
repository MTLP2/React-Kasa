import './assets/style/style.scss'
import Data from './assets/Data.json'

import {Routes, Route} from "react-router-dom";
import { useState } from "react";

import Home from "./Component/Home.jsx"
import Apropos from "./Component/Apropos.jsx";
import Nav from "./Component/Nav.jsx";
import Eror from "./Component/Eror.jsx";
import FicheLogement from "./Component/FicheLogement.jsx";
import Footer from "./Component/Footer.jsx";



export default function App (){
  const [logo, setlogo] = useState('/img/LOGO.png')
  const [data , setdata] = useState(Data)

  return (
    <>
    <div className="principalContainer">
    <Nav logo={logo}/>
        <Routes>
          <Route path="*" element={<Eror />}/>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/apropos" element={<Apropos />}/>
          <Route path="/Fiche-Logement/:id" element={<FicheLogement data={data} />}/>
        </Routes>
    </div>
      <Footer logo={logo} />
    </>
  ) 
}

