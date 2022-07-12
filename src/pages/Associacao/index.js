import React from "react";
import CaixasDownload from "../../Elements/CaixasDownload";
import Diretoria from "../../Elements/Diretoria";
import ImagemCentral from "../../Elements/ImagemCentral";
import MenuNav from "../../Elements/MenuNav";
import Rodape from "../../Elements/Rodape";
import TituloTexto from "../../Elements/TituloTexto";
import VideoCentral from "../../Elements/VideoCentral";



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
            <h2 className="titulo-Diretoria">Retrospectiva 2020</h2>
            <VideoCentral video={<iframe  width="560" height="315" src="https://www.youtube.com/embed/CqA4j1TF91Q" title="YouTube video player"  frameBorder="0"  allowFullScreen ></iframe>} />

            <h2 className="titulo-Diretoria">Diretória</h2>
            <section className="container-Diretoria">
            <Diretoria
            image="./img/fotoelisangela.png"
            nome="Elisângela de Sousa Sales Andrade"
            cargo="Diretora Presidente"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Orileuda de Sousa Caetano"
            cargo="Diretora Vice-presidente"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Veruska Maria Pessoa Feitosa"
            cargo="Primeira Diretora Tesoureira"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Francisca Maria Freitas dos Santos"
            cargo="Segunda Diretora Tesoureira"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Maria do Socorro Oliveira Rocha"
            cargo="Primeira Diretora Secretária"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Elaine Ramos Sales"
            cargo="Segunda Diretora Secretária"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="João Alves de Carvalho Neto"
            cargo="Diretor de Relações Públicas"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Maria do Rosário de Fátima Franco Batista"
            cargo="Primeira Conselheira Fiscal"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Cláudia Nunes da Silva"
            cargo="Segunda Conselheira Fiscal"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Osvaldino Pereira de Sousa"
            cargo="Terceiro Conselheiro Fiscal"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Rosana Maria de Oliveira Castro"
            cargo="Primeira Suplente de Conselheira Fiscal"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Florença de Oliveira e Silva"
            cargo="Segunda Suplente de Conselheira Fiscal"
            />
            <Diretoria
            image="./img/logoRedondo.png"
            nome="Maria Silvana dos Santos Machado"
            cargo="Terceira Suplente de Conselheira Fiscal"
            />
            </section>
            <Rodape/>
        </div>
    )
}
export default Associacao;