import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function LocationDetailsPage() {

    const [place, setPlace] = useState({});
    const { placeId } = useParams();

    const getOnePlace = () => {
        axios.get(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
            .then((response) => {
                setPlace(response.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getOnePlace();
    }, []);

    return (

        <>
            <h1>Place Details</h1>
            <h2>?? -- add --EDIT-- and --DELETE-- functions to this page??</h2>

            <div className='location-details-container' key={place.id}>
                {place && (
                    <div>
                        <img className='place-image' src={place.placeImage} />
                        <h3>Place Name: {place.placeName}</h3>
                        <h3>Location: {place.location}</h3>
                        <h3>Description: {place.placeDescription}</h3>
                        <img className='inhabitants-image' src={place.inhabitantsImage} />
                        <h3>Inhabitants: {place.inhabitants}</h3>
                        <h3>Description: {place.inhabitantsDescription}</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default LocationDetailsPage;