import React from "react"
import "./CaixasDownload.css"


const CaixasDownload = (props) => {
    return (

        <div className="caixa-Caixa-Download">
            <a href={props.documento} download>
                <div className="caixaDownload">{props.nome}</div>
            </a>
        </div>





    )
}
export default CaixasDownload