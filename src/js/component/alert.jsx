// para estudiar; vamos a usar props para cambiar el color de las alertas
import React from 'react';

function Alert(props) {
    return <div class={"alert alert-"+props.variant} role="alert">
            A simple primary alert-check it out!
            </div>
}

export default Alert