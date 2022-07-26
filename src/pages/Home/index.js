import React from "react";
import BannerFaixa from "../../Elements/BannerFaixa";
import Eventos from "../../Elements/Eventos";
import FaixaContato from "../../Elements/FaixaContato";
import FaixaDoacao from "../../Elements/FaixaDoacao";
import FaixaVermelha from "../../Elements/FaixaVermelha";
import InitialBanner from "../../Elements/InitialBanner";
import MenuResponsivo from "../../Elements/menuResponsivo";

import RedesSociais from "../../Elements/RedesSociais";
import Rodape from "../../Elements/Rodape";
import TituloTexto from "../../Elements/TituloTexto";
import VideoCentral from "../../Elements/VideoCentral";




function Home() {
  return (
    <div>
      <MenuResponsivo/>
      <InitialBanner />
      <FaixaVermelha />

      <h3 className="tituloEventos">Eventos</h3>

      <section className="container-eventos">
        <Eventos
          mesEAno={'MARÇO/2022'}
          nomeDoEvento={'Dia Internacional da Sindrome de Down'}
          horario={'Inicio: 15h'}
          endereço={"Ponte Estaiada - Teresina-PI"}
        />
        <Eventos
          mesEAno={'JUNHO/2022'}
          nomeDoEvento={'Festival Junina'}
          horario={'21 de Março / Inicio: 19h'}
          endereço={'Teresina-PI'}
        />
       
      </section> {/*Termina o container Eventos */}

      <TituloTexto
        titulo={'Nossa Missão'}
        texto={'Promover a melhoria da qualidade de vida e desenvolvimento de habilidades e competências da pessoa com T21. Defender e garantir os direitos das pessoas com T21, promovendo sua autonomia e inclusão social.'}
      />

      <TituloTexto
        titulo={'Nossa Visão'}
        texto={'Ser um agente de informação, divulgação e referência sobre a Síndrome de Down no Estado do Piauí.'}
      />
      <VideoCentral video= {<iframe width="560" height="315" src="https://www.youtube.com/embed/rhGl-o1VhAA" title="YouTube video player" frameBorder="0"  allowFullScreen></iframe> }/>
      <BannerFaixa/>
      <FaixaDoacao/>
      <FaixaContato/>
      <RedesSociais/>
      <Rodape/>

   
    

    </div>


  )
}
export default Home;