import React from "react";
import "./TituloTexto.css"

const TituloTexto = (props) => {
    return(
        <section className="tituloTexto">
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </section>
    )
}
export default TituloTexto