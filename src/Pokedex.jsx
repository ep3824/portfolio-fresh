import React from 'react';



export default function PokeDex({ pokemon }) {
    //For now just faking this data
    pokemon = {
        name: "Pikachu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        type: "Electric",
        height: "1'4",
        weight: "13.2 lbs"
    }
    return (
        <div>
            <h1>Pokedex</h1>
            <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name} />
                <p>Type: {pokemon.type}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>
        </div>
    );
}
