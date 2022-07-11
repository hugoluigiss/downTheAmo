import React from "react";
import BannerFaixa from "../../Elements/BannerFaixa";
import Eventos from "../../Elements/Eventos";
import FaixaContato from "../../Elements/FaixaContato";
import FaixaDoacao from "../../Elements/FaixaDoacao";
import FaixaVermelha from "../../Elements/FaixaVermelha";
import InitialBanner from "../../Elements/InitialBanner";
import RedesSociais from "../../Elements/RedesSociais";
import Rodape from "../../Elements/Rodape";
import TituloTexto from "../../Elements/TituloTexto";




function Home() {
  return (
    <div>
      <InitialBanner />
      <FaixaVermelha />

      <h3 className="tituloEventos">Proximos Eventos</h3>

      <section className="container-eventos">
        <Eventos
          mesEAno={'JULHO/2022'}
          nomeDoEvento={'Festa para Crianças'}
          horario={'Inicio: 10h'}
          endereço={'Rua joão Bairro Maria Teresina-PI'}
        />
        <Eventos
          mesEAno={'SETEMBRO/2022'}
          nomeDoEvento={'Palestra para as mães'}
          horario={'Inicio: 21h'}
          endereço={'Rua joão Bairro Maria Teresina-PI'}
        />
        <Eventos
          mesEAno={'DEZEMBRO/2022'}
          nomeDoEvento={'Festa para Crianças'}
          horario={'Inicio: 10h'}
          endereço={'Rua joão Bairro Maria Teresina-PI'}
        />
      </section> {/*Termina o container Eventos */}

      <TituloTexto
        titulo={'Nossa História'}
        texto={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
      />

      

      <BannerFaixa/>
      <FaixaDoacao/>
      <FaixaContato/>
      <RedesSociais/>
      <Rodape/>

   
    

    </div>


  )
}
export default Home;