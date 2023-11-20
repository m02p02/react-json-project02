import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllLocationsPage() {
    const [locations, setLocations] = useState([]);
    
    const displayAllPlaces = () =>{
        axios.get("https://exo-app-rest-api.adaptable.app/places")
            .then((response) =>{
                setLocations(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        displayAllPlaces();
    }, []);

    return (
        <div>
            <h2>1. This is the All Locations Page</h2>
            <ul>
                {locations.map(place =>(
                    <Link to={`/places/details/${place.id}`}>
                        <li key={place.id}>
                            <img className='place-image'src={place.placeImage} />
                            <h3>{place.placeName}</h3>
                            <p>Location:{place.location}</p>
                            <p>Description:{place.placeDescription}</p>
                            <p>inhabitants:{place.inhabitants}</p>
                            <p>Description:{place.inhabitantsDescription}</p>
                            <img className='place-image' src={place.inhabitantsImage} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>







       /* <>
            <h3>2. All locations in the database will be listed here</h3>
            <h3>3. This page will have THREE links and TWO functions:</h3>
            <h3>Link 1 = each listing links to the Location Details Page</h3>
            <Link to='/location-details'>Location Details Page</Link>
            <h3>Link 2 = goes to Random Location Page</h3>
            <Link to='/random-location'>Random Location Page</Link>
            <h3>Link 3 = goes to the Add Location Page</h3>
            <Link to='/add-location'>Add Location page</Link>
            <h3>BUTTON Function 1 = EDIT location (/src/components/EditLocation.jsx)</h3>
            <h3>BUTTON Function 2 = DELETE location (/src/components/DeleteLocation.jsx)</h3>
        </>
        */
    )
}

export default AllLocationsPage;