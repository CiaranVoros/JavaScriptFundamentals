import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div>
            {props.allProducts.map((product, i) =>
                <div key={product._id}>
                <Link to={'/api/product/' + product._id}> {product.title}</Link>
                </div>
            )}
        </div>
    )
}
export default ProductList