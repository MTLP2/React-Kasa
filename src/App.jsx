import {Routes, Route} from "react-router-dom";
import Home from "./Component/Home.jsx"
import Apropos from "./Component/Apropos.jsx";
import Nav from "./Component/Nav.jsx";
import Eror from "./Component/Eror.jsx";
import FicheLogement from "./Component/FicheLogement.jsx";
import './assets/style/style.scss'
import Footer from "./Component/Footer.jsx";
import { useState } from "react";
import Data from './assets/Data.json'




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

