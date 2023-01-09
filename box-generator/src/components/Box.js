import React, { Component } from 'react';
import styles from './Box.module.css';



class Box extends Component {

    constructor(props) {
        super(props);

    }

    
    render() {
        const boxStyle = (item) => {
            let boxStyling = {
                border: "1px solid black",
                width: "100px",
                backgroundColor: item,
                height: "100px"
            }
            return boxStyling
        }
        return (
            <div>
                {
                    this.props.boxes.map((item , i) => 
                    <div key={i} style={boxStyle(item)}></div>)
                }
            </div>
        );
    }
}



export default Box;