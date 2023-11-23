import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
        
            <div>
                <p className='component-header'>▶_:</p>
                <p className='component-header'>▶_: all locations have been loaded...</p>
            </div>

            <div className='location-cards-container'>
                {place.map(place => (
                    <Card className='location-cards' style={{ width: '15rem' }}>
                        <div key={place.id}>
                            <Card.Img
                                variant='top'
                                src={place.placeImage ? place.placeImage : 'https://t4.ftcdn.net/jpg/04/73/11/19/360_F_473111955_vH53HZxAXuaV1WjFgkmfAKuOB13BUJT9.jpg'}
                            />
                            <Card.Body>
                                <Link to={`/places/details/${place.id}`}>
                                    <div className='location-cards-font'>
                                        <Card.Title className='card-font'>
                                            ▶_: {place.placeName}
                                        </Card.Title>
                                    </div>
                                </Link>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default AllLocationsPage;