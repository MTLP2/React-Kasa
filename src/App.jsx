import {Routes, Route} from "react-router-dom";
import Home from "./Component/Home.jsx"
import Apropos from "./Component/Apropos.jsx";
import Nav from "./Component/Nav.jsx";
import Eror from "./Component/Eror.jsx";
import FicheLogement from "./Component/FicheLogement.jsx";

export default function App (){
  return (
    <>
    <Nav/>
        <Routes>
          <Route path="*" element={<Eror />}/>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />}/>
          <Route path="/Fiche-Logement/id" element={<FicheLogement />}/>

        </Routes>
    </>
  ) 
}

