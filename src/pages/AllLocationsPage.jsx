import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllLocationsPage() {
    const [place, setPlace] = useState([]);

    const displayAllPlaces = () => {
        axios.get("https://exo-app-rest-api.adaptable.app/places")
            .then((response) => {
                setPlace(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        displayAllPlaces();
    }, []);

    return (
        <>
            <p>Where do you want to go?</p>
            <Carousel className='carousel'>
                {place.map(place => (
                    <Carousel.Item className='carousel-item' interval={5 * 1000}>
                        <div key={place.id}>
                            <Link to={`/places/details/${place.id}`}>
                                <img src={place.placeImage} />
                                <Carousel.Caption>
                                    <div className='caption'>{place.placeName}</div>
                                </Carousel.Caption>
                            </Link>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default AllLocationsPage;