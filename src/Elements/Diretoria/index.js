import React from "react";
import "./diretoria.css"

const Diretoria = (props) => {
    return(
        <section className="diretoria">
            <img src={props.image} />
            <p>{props.cargo}</p>
            <h3> {props.nome} </h3>
        </section>
    )
}
export default Diretoria;