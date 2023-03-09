import React from 'react';

const UseState = () => {
    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Carlos',
        email: 'carlos01@gamil.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1)
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Juan',
                email: 'none@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Hello World</h1>
            <h3>Nombre Persona: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementarContador}>+</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default UseState;
