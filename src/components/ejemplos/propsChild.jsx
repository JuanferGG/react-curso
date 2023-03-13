import React from 'react';

const PropsChild = (props) => {
    return (
        <div>
            <h1>Ejemplo props.children</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/** props.children pintara por defecto lo se encuentre entre las etiquetas de apertura de este cmponente de orden superior*/}
            {props.children}
        </div>
    );
}

export default PropsChild;
