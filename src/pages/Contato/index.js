import React from "react";
import FaixaContato from "../../Elements/FaixaContato";
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

        <FaixaContato/>
        </div>
    )
}
export default Contato;