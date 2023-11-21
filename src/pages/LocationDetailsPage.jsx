import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Accordion } from "react-bootstrap";

function LocationDetailsPage(props) {

    const [place, setPlace] = useState({});
    const { placeId } = useParams();

    const navigate = useNavigate();

    const editPlace = () => {
        navigate(`/edit/${placeId}`);
    }

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

    const deletePlace = () => {
        axios.delete(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
            .then((response) => {
                navigate("/places/all-places");
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (

        <>
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

                        <button className='submit-btn' onClick={() => navigate(`/places/edit/${placeId}`)}>Update Information</button>
                        <button className='submit-btn' onClick={function () { deletePlace() }}>Delete from Database</button>
                    </>
                )}
            </div>
        </>
    )
}

export default LocationDetailsPage;