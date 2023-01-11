import React, {useContext} from 'react';

import FormContext from '../contexts/FormContext';

export default () => {
    const {name, setName} = useContext(FormContext)

    return (
        <div>
            <label>Name: </label>{" "}
            <input value={name} onChange={e => setName(e.target.value)}></input>
        </div>
    )
}