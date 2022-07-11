import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Main from "./pages/Main";
import SobreEmpresa from "./pages/SobreEmpresa";
import Contato from "./pages/Contato";

const Rota = () => {
    return(
       
            <Router>
              <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/sobre-empresa" element={<SobreEmpresa/>}/>
              </Routes>
          </Router> 

    )
}
export default Rota