import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Alert from "./alert.jsx";
// TODO ES COMPONENTE
//un componente es una función que inicia con Mayúscula
//los componentes son funciones que RETORNAN HTML
//los componentes se llaman como si fueran una etiqueta HTML
//si creamos un componente tiene que tener MAYUSCULA!!!
//para importar:
//import nombreFuncion from "./ubicación-archivo.jsx";

function Cimiento(){
	let cards = [{
		title:"Primera carta",
		description:"Descripción primera carta",
		imageUrl:"https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680",
		buttonLabel:"Primer botón"
	},
	{
		title:"Segunda carta",
		description:"Descripción segunda carta",
		imageUrl:"https://www.cuidadosparamascotas.com/wp-content/uploads/2019/09/gatitos-importancia-vitaminas.jpg",
		buttonLabel:"Segundo botón"
	},
	{
		title:"Tercera carta",
		description:"Descripción tercera carta",
		imageUrl:"https://images.unsplash.com/photo-1591871937631-2f64059d234f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
		buttonLabel:"Tercer botón"
	},
	{
		title:"Cuarta carta",
		description:"Descripción cuarta carta",
		imageUrl:"https://www.vetpjp.com/wp-content/uploads/2017/04/freddie-marriage-40645.jpg",
		buttonLabel:"Cuarto botón"
	}]

	return <div>
		<div className="row m-0 p-0" style={{width: "100%"}}>
			<Navbar />
			<Jumbotron/>
			{
				cards.map(function(value, index, array){ 
					return <Card carta={value} /> 
				})
			}
			{/* <Alert variant='primary'/>
			<Alert variant='warning'/>
			<Alert variant='warning'/> */}
			<Footer/>
		</div>
	</div>
}


//antes module.export, ahora export default "nombre componente"
export default Cimiento;

//se diferencian los componentes y las funciones, es que la primera son funciones que retornan HTML
//funciones tienen que ser exportadas para poder utilizadas por otros archivos
