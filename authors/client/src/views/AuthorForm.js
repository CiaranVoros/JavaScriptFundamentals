import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default props => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/new/author', { name })
            .then(res => {
                console.log("Response", res)
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
        <form onSubmit={onSubmitHandler}>
        {
            errors.map((err, i) => <p key={i}>{err}</p>)
        }
            <div>
                <label>Author Name</label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <input type="submit" />
        </form>
    )
}