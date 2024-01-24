import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

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

export default function PlacesAutocomplete({ onCitySelect }) {
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

  const handleCitySelect = (city) => {
    setInputValue(city.description);
    setPlaces([]);
    onCitySelect(city); // Send selected city to the parent component
  };

  PlacesAutocomplete.propTypes = {
    onCitySelect: PropTypes.func.isRequired,
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <TextField
        label="Enter a location"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          borderTop: "none",
          color: "black",
        }}
      >
        {places &&
          Array.isArray(places.predictions) &&
          places.predictions.length > 0 &&
          places.predictions.map((place) => (
            <li
              key={place.place_id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #e0e0e0",
                cursor: "pointer",
              }}
              onClick={() => handleCitySelect(place)}
            >
              {place.description}
            </li>
          ))}
      </ul>
    </div>
  );
}
