import React from "react";
import "./InitialBanner.css"


const InitialBanner = () => {
    return (
        <section className="BannerInicial" >
            <header>
                <div className="nav-caixa-vazia"></div>
                <div className="nav-caixa">
                    <a href="/">Home</a>
                    <a href="/associacao">Associação</a>
                    <a href="/galeria">Galeria</a>
                    <a href="/contato">Contato</a>
                </div>
            </header>
            <img className="BannerInicial-logo" src="./img/logobranca.png" alt="Logo DownTheAmo" />
        </section>
    )
}

export default InitialBanner;