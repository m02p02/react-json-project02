import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllLocationsPage() {
    const [locations, setLocations] = useState([]);
    
    useEffect(() =>{
        axios.get("https://exo-app-rest-api.adaptable.app/places")
        .then(response =>{
            setLocations(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    return (
        <div>
            <h2>1. This is the All Locations Page</h2>
            <ul>
                {places.map(place =>(
                    <li key={place._id}>
                        <img src={place.placeImage_url} alt={place.placeName} style={{ maxWidth: "50px" }}/>
                        <h3>{place.name}</h3>
                        <p>Location:{place.location}</p>
                        <p>placeDescription:{place.placeDescription}</p>
                        <p>inhabitants:{place.inhabitants}</p>
                        <p>inhabitantsDescription:{place.inhabitantsDescription}</p>
                        <img src={place.inhabitantsImage_url} alt={place.inhabitants} style={{ maxWidth: "50px" }}/>

                    </li>
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