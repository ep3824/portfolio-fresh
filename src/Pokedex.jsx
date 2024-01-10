import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function PokeDex({ chatAnswer }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImages, setPokemonImages] = useState(null);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await fetch("/api/listPokemon");
        if (response.ok) {
          const pokemonData = await response.json();
          setPokemonData(pokemonData);
        } else {
          console.error(
            `Failed to fetch pokemon data. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    getPokemonData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  // fire the render image fn when chatAnswer is updated
  useEffect(() => {
    if (chatAnswer && pokemonData) {
      renderPokemonImage();
    }
  }, [chatAnswer, pokemonData]);

  const renderPokemonImage = async () => {
    const pokeNames = [];
    const pokeImages = [];
    pokemonData.results.map((pokemon) =>
      pokeNames.push(pokemon.name.toLowerCase())
    );
    for (let i = 0; i < pokeNames.length; i++) {
      // the regex here is so we can avoid matching to words that aren't actually poke  names
      // and at the same time so we can grab names in a comma seperated list
      if (chatAnswer.toLowerCase().split(/[ ,]+/).includes(pokeNames[i])) {
        const pokemonName = pokeNames[i];
        const pokemonImage = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        )
          .then((response) => response.json())
          .then((data) => data.sprites.front_default);
        console.log(pokemonImage);
        pokeImages.push({ name: pokemonName, image: pokemonImage });
        console.log("poke image array", pokeImages);
        // return pokemonImage;
      } else {
        console.log("No Pokemon found in answer");
      }
    }
    setPokemonImages(pokeImages);
  };

  //For now just faking this data
  const pokemon = {
    name: pokemonImages ? pokemonImages[0].name : null,
    image: pokemonImages ? pokemonImages[0].image : null,
    type: "Electric",
    height: "1'4",
    weight: "13.2 lbs",
  };
  console.log("chatAnswer", chatAnswer);

  PokeDex.propTypes = {
    chatAnswer: PropTypes.string,
  };

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
