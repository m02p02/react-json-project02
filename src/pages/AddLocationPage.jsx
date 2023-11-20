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

        axios.post('https://exo-app-rest-api.adaptable.app/places/', requestBody)
            .then(response =>{
                navigate("/places/all-places")
            })
            .catch((error) => {
                console.log("error creating place in the API");
                console.log(error);
            })
    }
    return (
        <div>
            <h3>Add a Place</h3>
            <form className='add-location-form' onSubmit={handleSubmit}>
                <label className='input-label'>
                    Place Name
                    <input 
                    type="text" 
                    name="Place" 
                    placeholder="Place name"
                    required={true}
                    value={placeName}
                    onChange={(e) => { setPlaceName(e.target.value) }}
                    />
                </label>
                <label className='input-label'>
                    Location
                    <input 
                    type="text" 
                    name="Location" 
                    placeholder="Where is it located?"
                    required={true}
                    value={location}
                    onChange={(e) => { setLocation(e.target.value) }}
                    />
                </label>
                <label className='input-textarea'>
                    Description
                    <textarea 
                    type="text" 
                    name="Description" 
                    placeholder="Describe the place and location"
                    required={true}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>
                <label className='input-label'>
                    Inhabitants
                    <input 
                    type="text" 
                    name="Inhabitants" 
                    placeholder="What lives there?"
                    required={true}
                    value={inhabitants}
                    onChange={(e) => { setinhabitants(e.target.value) }}
                    />
                </label>
                <label className='input-textarea'>
                    Inhabitants Description
                    <textarea 
                    type="text" 
                    name="Inhabitants description" 
                    placeholder="Describe those life forms"
                    required={true}
                    value={inhabitantsDescription}
                    onChange={(e) => { setInhabitantsDescription(e.target.value) }}
                    />
                </label>
                <button type='submit'>Add Place to database</button>
            </form>

        </div>
        
        // <>
        //     <h1>Add Location Page</h1>
        //     <h2>Add functionality - when a new location is added, automatically redirect to All Locations Page</h2>
        // </>
    )
}

export default AddLocationPage;