import React from "react";
import "./FaixaDoacao.css"

const FaixaDoacao = () => {
    return(
        <section className="faixaDoacaoContainer">
            <div className="faixaDoacaoImagem">
                <img src="./img/doacao.png" alt="Imagem da caixa de doação."/>
            </div>
            <div className="faixaDoacaoTexto">
                <h3>DOAÇÕES</h3>
                <p>
                CONTA CORRENTE: 58.964-0 <br/>
                AGÊNCIA: 3285-9<br/>
                BANCO DO BRASIL - 001<br/>
                PIX: 39961815000172<br/>
                </p>
            </div>
        </section>
    )
}
export default FaixaDoacao