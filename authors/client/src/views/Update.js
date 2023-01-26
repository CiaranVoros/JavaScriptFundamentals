import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/author/' + id)
        .then(res => {
            setName(res.data.name)
        })
    }, [id])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/author/edit/' + id, {name})
        .then(res => {
            console.log(res)
            navigate('/authors')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errArr = []
            for (const key of Object.keys(errorResponse)) {
                errArr.push(errorResponse[key].message)
            }
            setErrors(errArr)
        })
    }

    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
            {
                errors.map((err, i) => <p key={i}>{err}</p>)
            }
                <div>
                    <label>Author Name</label>
                    <input type="text" value={name} name="name" onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;