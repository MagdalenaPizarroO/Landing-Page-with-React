import React from 'react'

function Navbar(){
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
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