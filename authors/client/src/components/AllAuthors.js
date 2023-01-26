import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const allAuthors = (props) => {
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/author/delete/' + authorId)
            .then(res => removeFromDom(authorId))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {props.allAuthors.map((author, i) =>
                <div key={author._id}>
                    <p>
                        <span>{author.name}</span> | 
                        <Link to={'/author/edit/' + author._id}>edit</Link> |
                        <button onClick={(e) =>{deleteAuthor(author._id)}}>delete</button> 
                    </p>
                </div>
            )}
        </div>
    )
}

export default allAuthors;