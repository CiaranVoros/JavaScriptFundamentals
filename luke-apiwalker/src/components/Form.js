import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const navigate = useNavigate();

    const handleType = (e) => {
        props.setType(e.target.value)
    }

    const handleId  = (e) => {
        props.setId(e.target.value)
    }

    const getApi = (e) => {
        e.preventDefault();
        navigate(`/${props.type}/${props.id}`)
    }

    return (
        <div>
            <form onSubmit={getApi}>
                <label >Search For</label>
                <select  name='' id='' onClick={handleType}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="films">films</option>
                    <option value="species">species</option>
                    <option value="vehichles">vehichles</option>
                    <option value="starships">starships</option>
                </select>
                <label htmlFor=''>Id: </label>
                <input type="number" onChange={handleId}></input>
                <button>Search</button>
            </form>
        </div>
    )
}
export default Form;