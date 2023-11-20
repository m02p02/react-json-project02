import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function LocationDetailsPage() {

    const [place, setPlace] = useState({});
    const {placeId} = useParams();

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
            <h2>1. This is the Location Details Page</h2>
            <h3>2. This will display specific/individual locations</h3>
            <h3>3. These locations can only be accessed via the All Locations Page</h3>

            <div className='place-details-container' key={place.id}>
                {place && (
                    <>
                        <img className='place-image' src={place.placeImage} />
                        <h3>{place.placeName}</h3>
                        <h3>{place.location}</h3>
                        <h3>{place.placeDescription}</h3>
                        <img className='inhabitants-image' src={place.inhabitantsImage} />
                        <h3>{place.inhabitants}</h3>
                        <h3>{place.inhabitantsDescription}</h3>
                    </>
                )}
            </div>
        </>
    )
}

export default LocationDetailsPage;