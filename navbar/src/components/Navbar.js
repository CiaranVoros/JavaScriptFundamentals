import React, {useContext} from 'react';

import FormContext from '../contexts/FormContext';

const Navbar = () => {
    const {name} = useContext(FormContext);

    return <div>Hi {name}!</div>
}
export default Navbar