import React from "react";
import AppGaleriaFotos from "../../Elements/GaleriaDeFotos";
import MenuNav from "../../Elements/MenuNav";
import MenuResponsivo from "../../Elements/menuResponsivo";
import Rodape from "../../Elements/Rodape";



const Galeria = () => {
    return (
        <div>
        <MenuNav/>
        <AppGaleriaFotos/>
        <Rodape/>
        </div>
       
    )
}
export default Galeria;