import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Content = (props) => {

    const [data, setData] = useState()
    const {category, id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response.data)
                let arr = Object.entries(response.data)
                setData(arr);
                console.log(arr)
            })
    }, [category, id])

    return (
        <div>
            {
                data &&
                    data.map((item, i) =>
                        <div key={i}>
                            <p>{item[0]} : {item[1]}</p>
                        </div>)
            }
        </div>
    )
}

export default Content;