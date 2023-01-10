import React, { Component } from 'react';


const Tab = (props) => {

    const handleContent = (e) => {
        props.setContent(e.target.value);
    }

    return (
        <div>
            {
                props.tabs.map((item, i) => 
                <button key={i} onClick={handleContent} value={item}>{item}</button>)
            }

        </div>
    )
}

export default Tab;