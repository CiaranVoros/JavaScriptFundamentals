import React, {useState} from 'react';
import Box from './Box';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    
    const createBox = (e) => {
        e.preventDefault();
        props.boxes.push(color);
        props.setBoxes([... props.boxes])
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }


    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color :</label>
                    <input onChange={handleColor} type="text"></input>
                </div>
                <input type="submit" value="Create Box"></input>
            </form>
            
        </div>
    )
}

export default BoxForm;