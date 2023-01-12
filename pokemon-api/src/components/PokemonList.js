import React, {useState} from 'react';

const PokeList = (props) => {



    const listAllPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
            // console.log(response.results)
            // for(let i = 0; i < response.results.length; i++) {
            //     console.log(response.results[i]);

            // }

            props.setAllPokemon([... response.results])
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <button onClick={listAllPokemon}>All Pokemon</button>
            {
                props.allPokemon.map((item, i) =>
                <div key={i}> {item.name} </div>)
            }
        </div>
    )
}
export default PokeList;