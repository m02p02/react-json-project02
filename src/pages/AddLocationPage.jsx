import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddLocationPage(){
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [inhabitants, setinhabitants] = useState("");
    const [inhabitantsDescription, setInhabitantsDescription] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            placeName: placeName,
            location: location,
            description: description,
            inhabitants: inhabitants,
            inhabitantsDescription: inhabitantsDescription
        }

        axios.post(`${import.meta.env.EXO_APP_URL}/places`, requestBody)
            .then(response =>{
                navigate("/places/all-places")
            })
            .catch((error) => {
                console.log("error creating place in the API");
                console.log(error);
            })
    }
    return (
        <div className="AddLocationPage">
            <h3>Add a Place</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Place Name
                    <input 
                    type="text" 
                    name="Name of your place" 
                    placeholder="Please enter your place name"
                    required={true}
                    value={placeName}
                    onChange={(e) => { setPlaceName(e.target.value) }}
                    />
                </label>
                <label>
                    Location
                    <input 
                    type="text" 
                    name="Location" 
                    placeholder="Please enter your place location"
                    required={true}
                    value={location}
                    onChange={(e) => { setLocation(e.target.value) }}
                    />
                </label>
                <label>
                    Description
                    <input 
                    type="text" 
                    name="Description" 
                    placeholder="Please enter a description about your place"
                    required={true}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>
                <label>
                    Inhabitants
                    <input 
                    type="text" 
                    name="Inhabitants" 
                    placeholder="Please enter inhabitants of your place"
                    required={true}
                    value={inhabitants}
                    onChange={(e) => { setinhabitants(e.target.value) }}
                    />
                </label>
                <label>
                    Inhabitants Description
                    <input 
                    type="text" 
                    name="Inhabitants description" 
                    placeholder="Please enter a inhabitants details of your place"
                    required={true}
                    value={inhabitantsDescription}
                    onChange={(e) => { setInhabitantsDescription(e.target.value) }}
                    />
                </label>
                <button>Add Place to database</button>
            </form>

        </div>
        
        // <>
        //     <h1>Add Location Page</h1>
        //     <h2>Add functionality - when a new location is added, automatically redirect to All Locations Page</h2>
        // </>
    )
}

export default AddLocationPage;