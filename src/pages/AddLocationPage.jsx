import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddLocationPage(){
    const [placeName, setPlaceName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [placeImage, setPlaceImage] = useState('');
    const [inhabitants, setinhabitants] = useState("");
    const [inhabitantsDescription, setInhabitantsDescription] = useState("");
    const [inhabitantsImage, setInhabitantsImage] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            placeName: placeName,
            location: location,
            description: description,
            placeImage: placeImage,
            inhabitants: inhabitants,
            inhabitantsDescription: inhabitantsDescription,
            inhabitantsImage: inhabitantsImage
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
        <div className='body-div'>
            <h3>Log a Location, Traveller!</h3>
            <form className='input-place-form' onSubmit={handleSubmit}>
                <label className='input-label'>
                    Name
                    <input 
                    type="text" 
                    name="Place" 
                    placeholder="What is the place called?"
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
                    Place Image
                    <input 
                    type="text" 
                    name="Place Image" 
                    placeholder="URL"
                    required={true}
                    value={placeImage}
                    onChange={(e) => { setPlaceImage(e.target.value) }}
                    />
                </label>
                <label className='input-label'>
                    Inhabitants
                    <input 
                    type="text" 
                    name="Inhabitants" 
                    placeholder="Who or what lives there?"
                    required={true}
                    value={inhabitants}
                    onChange={(e) => { setinhabitants(e.target.value) }}
                    />
                </label>
                <label className='input-textarea'>
                    Description
                    <textarea 
                    type="text" 
                    name="Inhabitants description" 
                    placeholder="Can you describe them?"
                    required={true}
                    value={inhabitantsDescription}
                    onChange={(e) => { setInhabitantsDescription(e.target.value) }}
                    />
                </label>
                <label className='input-label'>
                    Inhabitants Image
                    <input 
                    type="text" 
                    name="Inhabitants Image" 
                    placeholder="URL"
                    required={true}
                    value={inhabitantsImage}
                    onChange={(e) => { setInhabitantsImage(e.target.value) }}
                    />
                </label>
                <button className='submit-btn' type='submit'>Add to Database</button>
            </form>
        </div>
    )
}

export default AddLocationPage;