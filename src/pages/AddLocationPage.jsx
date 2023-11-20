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
    }
    return (
        
        <>
            <h1>Add Location Page</h1>
            <h2>Add functionality - when a new location is added, automatically redirect to All Locations Page</h2>
        </>
    )
}

export default AddLocationPage;