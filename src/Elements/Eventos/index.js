import React from "react";
import "./Eventos.css"

const Eventos = (props) => {
    return(
        <section className="eventos-caixa">
        <div className="eventosFundo">
        <h3>{props.mesEAno}</h3>
        <p>{props.nomeDoEvento}</p>
        <p>{props.horario}</p>
        <p>{props.endereço}</p>
        </div>

        </section>
        
    )
}
export default Eventos