import "./menuResponsivo.css";
import React from "react";
import { slide as Menu } from 'react-burger-menu'

class MenuResponsivo extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }


    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            
                <Menu>
                    <a id="home" className="menu-item" href="/" style={{ color:"#F17D08", marginBottom:"15px" }}>Home</a>
                    <a id="associacao" className="menu-item" href="/associacao" style={{ color:"#F17D08", marginBottom:"15px" }}>Associação</a>
                    <a id="galeria" className="menu-item" href="/galeria" style={{ color:"#F17D08", marginBottom:"15px" }}>Galeria</a>
                    <a id="contato" className="menu-item" href="/contato" style={{ color:"#F17D08", marginBottom:"15px" }}>Contato</a>
                </Menu>
            
        );
    }
}

export default MenuResponsivo