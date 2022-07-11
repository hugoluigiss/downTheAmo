import React from "react";
import { Link } from "react-router-dom"

function LinkPaginas({ path, text}){
  return(
      <Link to={path}>{text}</Link>
  )
}

function App() {
  return (

    <div>
      <h1>Esta é a página APP</h1>
      <LinkPaginas path='/' text='Home' />
      <LinkPaginas path='/contato' text='Contato' />
      <LinkPaginas path='/institucional' text='Institucional' />

    </div>

  );
}

export default App;
