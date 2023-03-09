/**
 * useState
 * useEffect
 * useRef
 */

import React, { useState, useRef, useEffect } from 'react';

const Hooks = () => {
    
    // Crear 2 contadores distintos

    const [contador01, setContador01] = useState(0);
    const [contador02, setContador02] = useState(0);

    // Vamos a crear una referencia con useRef para asociar una variable con un elemento del DOM del componente

    const miRef = useRef();

    function increCon01(){
        setContador01( contador01 + 1 )
    }

    function increCon02(){
        setContador02( contador02 + 1)
    }

    // Trabajando con useEffect

    // ? case one: Ejecutar siempre un snippet de codigo
    // ? se ejecuta cada vez que alla un cambio en el componente dentro del useEffect()

    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // });

    //? 2: ejecutar solo en algunos casos
    //? Ejecutar solo cuando se utilice el aumentar01

    useEffect(() => {
        console.log('cambio en el estado del contador 01')
        console.log('mostrando referencia a elemento del DOM')
        console.log(miRef)
        
    }, [contador01]);

    return (
        <div>
            <h1>*** Ejemplo Hooks useState, useEffect, useRef ***</h1>
            <h3>Contador 01: {contador01}</h3>
            <h3>Contador 02: {contador02}</h3>

            {/* Elemento Referenciado */}

            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <button onClick={increCon01}>Aunmentar 01</button>
            <button onClick={increCon02}>Aunmentar 02</button>

        </div>
    );
}

export default Hooks;

