import React from 'react'

function Card(){
    return <div className="card" style={{width: "18rem"}}>
    <img src="https://i.pinimg.com/originals/53/e1/de/53e1deec43b5beb0adf0d8f3ce2b1be1.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Card;
//Los mandamientos de React
//1- Toda etiqueta que se abre, se debe cerrar
//2- Toda etiqueta de style en línea se comporta como si fuera un OBJETO EN JS
//style="width: 18rem;" -> 
//a)    style {     } indica que usaremos JS dentro del HTML
//b) style = { { } } indica que usaremos un objeto en JS
//c) style= {{ width : "18rem"}}
//otra forma sería
//a) crear una variable que almacene un objeto 
//  let estilos {
//  width:"18rem"
//  }
//b) insertarlo al estilo en linea <div class="card" style={estilos}>
//3- Toda class de HTML se va a transformar a className