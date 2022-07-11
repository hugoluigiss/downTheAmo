import React from "react";
import Formulario from "../../Elements/Formulario";
import MenuNav from "../../Elements/MenuNav";
import TituloTexto from "../../Elements/TituloTexto";


function Contato (){
    return(
        <div>
        <MenuNav/>
        <TituloTexto
                titulo={'Contato'}
                texto={'Estamos aguardando a sua mensagem, envia seu contato e responderemos assim que possível.'}
            />

        <Formulario/>
        </div>
    )
}
export default Contato;