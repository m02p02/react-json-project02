import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllLocationsPage() {
    const [place, setPlace] = useState([]);
    
    const displayAllPlaces = () =>{
        axios.get("https://exo-app-rest-api.adaptable.app/places")
            .then((response) =>{
                setPlace(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        displayAllPlaces();
    }, []);

    return (
        <>
            <h2>All Places</h2>
            <div className='all-locations-parent'>
                {place.map(place =>(
                    <Link to={`/places/details/${place.id}`}>
                        <div className='all-locations-container' key={place.id}>
                            <img className='place-image'src={place.placeImage} />
                            <h3>{place.placeName}</h3>
                            {/*<p>Location:{place.location}</p>
                            <p>Description: {place.placeDescription}</p>
                            <p>inhabitants: {place.inhabitants}</p>
                            <p>Description: {place.inhabitantsDescription}</p>
                            <img className='inhabitants-image' src={place.inhabitantsImage} />*/}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default AllLocationsPage;