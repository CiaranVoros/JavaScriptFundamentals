import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id) 
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    }, [id]);

    return (
        <div>
            <p>Price {product.price}</p>
            <p>Price {product.title}</p>

            <div>
                <Link to={`/api/product/${product._id}/edit`}>edit</Link>
            </div>
        </div>
    )
}
export default Detail;  