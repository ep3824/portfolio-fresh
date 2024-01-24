// PlacesAutocomplete.jsx

import React, { useState } from "react";

async function fetchPlaces(input) {
  try {
    const response = await fetch(
      `http://localhost:8443/api/places?input=${input}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function PlacesAutocomplete() {
  const [inputValue, setInputValue] = useState("");
  const [places, setPlaces] = useState([]);

  const handleInputChange = async (event) => {
    const input = event.target.value;
    setInputValue(input);

    if (input.trim() !== "") {
      const placesData = await fetchPlaces(input);
      setPlaces(placesData);
    } else {
      setPlaces([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {places &&
          Array.isArray(places.predictions) &&
          places.predictions.length > 0 &&
          places.predictions.map((place) => (
            <li key={place.place_id}>{place.description}</li>
          ))}
      </ul>
    </div>
  );
}
