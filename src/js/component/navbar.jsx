import React from 'react'

function Navbar(){
    return <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand p-2 text-white" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          <a className="nav-link text-muted" href="#">About</a>
          <a className="nav-link text-muted" href="#">Services</a>
          <a className="nav-link text-muted" href="#">Contact</a>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;
//Los mandamientos de React
//1- Toda etiqueta que se abre, se debe cerrar
//2- Toda etiqueta de style en línea se comporta como si fuera un OBJETO EN JS
//      style= {{ width : "18rem"}}
//3- Toda class de HTML se va a transformar a className