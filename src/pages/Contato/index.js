import React from "react";
import ContatoInfo from "../../Elements/ContatoInfo";

import MenuNav from "../../Elements/MenuNav";
import Rodape from "../../Elements/Rodape";
import TituloTexto from "../../Elements/TituloTexto";


function Contato() {
    return (
        <div>
            <MenuNav />
            <TituloTexto
                titulo={'Contato'}
                texto={'Estamos aguardando a sua mensagem, envia seu contato e responderemos assim que possível.'}
            />
            <ContatoInfo/>
            <Rodape />
        </div>
    )
}
export default Contato;