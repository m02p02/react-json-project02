import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function RandomLocationPage () {

    const [place, setPlace] = useState({});
    const { placeId } = useParams();

    const getRandomPlace = () => {
        axios.get('https://exo-app-rest-api.adaptable.app/places/')
            .then((response) => {
                const allPlaces = response.data;
                const randomize = Math.floor(Math.random() * allPlaces.length);
                const getRandom = allPlaces[randomize];
                setPlace(getRandom);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getRandomPlace();
    }, []);

    return (

        <>
            <h1>Random Place</h1>

            <div className='place-container' key={place.id}>
                {place && (
                    <>
                        <img className='place-image' src={place.placeImage} />
                        <h3>Place Name: {place.placeName}</h3>
                        <h3>Location: {place.location}</h3>
                        <h3>Description: {place.placeDescription}</h3>
                        <img className='inhabitants-image' src={place.inhabitantsImage} />
                        <h3>Inhabitants: {place.inhabitants}</h3>
                        <h3>Description: {place.inhabitantsDescription}</h3>
                    </>
                )}
            </div>
        </>
    )
}

export default RandomLocationPage;