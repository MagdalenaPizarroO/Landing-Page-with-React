import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
// TODO ES COMPONENTE
//un componente es una función que inicia con Mayúscula
//los componentes son funciones que RETORNAN HTML
//los componentes se llaman como si fueran una etiqueta HTML
//si creamos un componente tiene que tener MAYUSCULA!!!
//para importar:
//import nombreFuncion from "./ubicación-archivo.jsx";

function Cimiento(){
	return <div>
		<div className="row">
			<Navbar />
			<Jumbotron/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
}


//antes module.export, ahora export default "nombre componente"
export default Cimiento;

//se diferencian los componentes y las funciones, es que la primera son funciones que retornan HTML
//funciones tienen que ser exportadas para poder utilizadas por otros archivos
