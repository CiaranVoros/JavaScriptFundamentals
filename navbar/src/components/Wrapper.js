import React, { useContext, useState } from 'react';

import FormContext from '../contexts/FormContext';

export default ({ children }) => {
    const [name, setName] = useState("Ciaran Voros");

    return (
        <FormContext.Provider
            value={{
                name,
                setName
            }}
        > {children}</FormContext.Provider>
    )
}