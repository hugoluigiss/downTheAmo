import React from "react";
import CaixasDownload from "../../Elements/CaixasDownload";
import ImagemCentral from "../../Elements/ImagemCentral";
import MenuNav from "../../Elements/MenuNav";
import Rodape from "../../Elements/Rodape";
import TituloTexto from "../../Elements/TituloTexto";



function Associacao (){
    return(
        <div>
        <MenuNav/>
        <TituloTexto
                titulo={'Associação'}
                texto={'Saiba mais sobre sobre nossa associação, assim como documentos e relatórios atualizados para nossos associados!'}
            />

            <ImagemCentral image='./img/FachadaAssociacao.jpg' alt="Membros da associacao DownTheAmo em frente a sede." />
            
            <div className="container-caixaDownload">
            <CaixasDownload documento= "./img/EstatutoAssociacao.pdf" nome='Estatuto'/>
            <CaixasDownload documento= "./img/CartaoCNPJ.pdf" nome='Cartão CNPJ'/>
            <CaixasDownload documento= "./img/RelatórioDeAtividades.pdf" nome='Relatório de Atividades Anual'/>            
            </div>

            <Rodape/>

       
        </div>
    )
}
export default Associacao;