import React from "react";
import "./contatoInfo.css"
import { IoIosMail, IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";


const ContatoInfo = () => {
    return(
        <div className="ContatoInfo">
                
                <h3>  <IoMdPhonePortrait/> Telefone: (86) 99487-6242 </h3>
                <h3> <IoIosMail/> E-mail: downtheamo@gmail.com </h3>
                <a href="https://api.whatsapp.com/send?phone=5586994876242" target="_blank" rel="noopener noreferrer"> <h3> <IoLogoWhatsapp/> Clique para falar pelo Whatsapp. </h3> </a>
        </div>
    )
}
export default ContatoInfo;