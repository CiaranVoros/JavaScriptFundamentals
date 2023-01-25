import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
        .then(res => {
            setDescription(res.data.description)
            setTitle(res.data.title)
            setPrice(res.data.price)
        })
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' +id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            navigate('/api/product/' + id)
        })

        .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Price</label>
                    <input type="number" value={price} name="price" onChange={(e) => {setPrice(e.target.value) }}/>
                </p>
                <p>
                    <label>Title</label>
                    <input type="text" value={title} name="title" onChange={(e) => {setTitle(e.target.value) }}/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" value={description} name="description" onChange={(e) => {setDescription(e.target.value) }}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;