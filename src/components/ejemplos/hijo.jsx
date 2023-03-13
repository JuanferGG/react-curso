import React, { useContext } from 'react';
import { userContext } from './useContext';


const Hijo = () => {

    const user = useContext(userContext);

    return (
        <div>
            <h2>Componente Hijo</h2>
            {user && <p>Hola {user.name} {user.email}</p>}
        </div>
    );
}

export default Hijo;
