import React from 'react'
import PropTypes from "prop-types";

function Card(props){
    return <div className="card" style={{width: "18rem"}}>
    <img src={props.imageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
    </div>
  </div>
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
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