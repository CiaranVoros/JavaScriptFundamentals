import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm'
import AllAuthors from '../components/AllAuthors';
import { Link } from 'react-router-dom'


const Main = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/allAuthors')
        .then(res=> {
            setAllAuthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err))
    }, [allAuthors]);

    return (
        <div>
            <Link to={'/author/new'}>Add an Author</Link>
            {loaded && <AllAuthors allAuthors={allAuthors}></AllAuthors>}
        </div>
    )
}

export default Main;