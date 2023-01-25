import React, {useEffect, useState} from 'react';
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
        .then(res=>{
            setAllProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, [allProducts]);

    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList allProducts={allProducts}/>}
        </div>
    )
}

export default Main;


