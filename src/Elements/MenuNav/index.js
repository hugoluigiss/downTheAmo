import React from "react";

import "./MenuNav.css"

const MenuNav = () => {
    return (
        <div className="container-menuNav">
            <header className="menuNav">
                <div className="nav-caixa-vazia2">
                <a href="/"> <img src="./img/logobranca.png" alt="Logo DownTheAmo" /></a>
                </div>
                <div className="menu-formato-paginas">
                    <a href="/">Home</a>
                    <a href="/associacao">Associação</a>
                    <a href="/galeria">Galeria</a>
                    <a href="/contato">Contato</a>
                </div>
            </header>

           
        </div>


    )
}
export default MenuNav;
