import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { Accordion } from "react-bootstrap";

function RandomLocationPage() {

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

    function reloadPage() {
        window.location.reload(false);
    }

    return (

        <>

            <div>
                <p className='component-header'>▶_記入: </p>
                <p className='component-header'>▶_済: location [{place.placeName}] has been loaded...</p>
            </div>

            <div className='place-container' key={place.id}>
                {place && (
                    <>
                        <img className='container-image' src={place.placeImage} />
                        <img className='inhabitants-image' src={place.inhabitantsImage} />

                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header><h2>Place</h2></Accordion.Header>
                                <Accordion.Body>
                                    <h5>{place.placeName}</h5>
                                    <p>{place.location}</p>
                                    <p>{place.placeDescription}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='1'>
                                <Accordion.Header><h2>Life</h2></Accordion.Header>
                                <Accordion.Body>
                                    <h5>{place.inhabitants}</h5>
                                    <p>{place.inhabitantsDescription}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <button className='submit-btn' onClick={reloadPage}>Reload</button>
                    </>
                )}
            </div>
        </>
    )
}

export default RandomLocationPage;