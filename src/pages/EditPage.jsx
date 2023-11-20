import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditPage() {
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [placeImage, setPlaceImage] = useState('');
  const [inhabitants, setinhabitants] = useState("");
  const [inhabitantsDescription, setInhabitantsDescription] = useState("");
  const [inhabitantsImage, setInhabitantsImage] = useState('');

  const { placeId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        setPlaceName(response.data.placeName);
        setLocation(response.data.location);
        setDescription(response.data.description);
        setPlaceImage(response.data.placeImage);
        setinhabitants(response.data.inhabitants);
        setInhabitantsDescription(response.data.inhabitantsDescription);
        setInhabitantsImage(response.data.inhabitantsImage);
      })
      .catch((error) => {
        console.log("error getting place in the API");
        console.log(error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      placeName: placeName,
      location: location,
      description: description,
      placeImage: placeImage,
      inhabitants: inhabitants,
      inhabitantsDescription: inhabitantsDescription,
      inhabitantsImage: inhabitantsImage
    };

    axios
      .put(`https://exo-app-rest-api.adaptable.app/places/${placeId}`, requestBody)
      .then((response) => {
        navigate('/places/all-places');
      })
      .catch((error) => {
        console.log("error updating project");
        console.log(error);
      });
  };

  return (
    <div className="edit-page">
      <h3>This is Edit-Delete</h3>
      <form className='input-place-form' onSubmit={handleFormSubmit}>
        <label className='input-label'>
          Place Name
          <input
            type="text"
            name="Name of your place"
            placeholder="Please enter your place name"
            required={true}
            value={placeName}
            onChange={(e) => {
              setPlaceName(e.target.value);
            }}
          />
        </label>
        <label className='input-label'>
          Location
          <input
            type="text"
            name="Location"
            placeholder="Please enter your place location"
            required={true}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label className='input-textarea'>
          Description
          <textarea
            type="text"
            name="Description"
            placeholder="Please enter a description about your place"
            required={true}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label className='input-label'>
          Place Image
          <input
            type="text"
            name="Place Image"
            placeholder="URL of Place Image"
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
            placeholder="Please enter inhabitants of your place"
            required={true}
            value={inhabitants}
            onChange={(e) => {
              setinhabitants(e.target.value);
            }}
          />
        </label>
        <label className='input-textarea'>
          Inhabitants Description
          <textarea
            type="text"
            name="Inhabitants description"
            placeholder="Please enter a inhabitants details of your place"
            required={true}
            value={inhabitantsDescription}
            onChange={(e) => {
              setInhabitantsDescription(e.target.value);
            }}
          />
        </label>
        <label className='input-label'>
          Inhabitants Image
          <input
            type="text"
            name="Inhabitants Image"
            placeholder="URL of inhabitants image"
            required={true}
            value={inhabitantsImage}
            onChange={(e) => { setInhabitantsImage(e.target.value) }}
          />
        </label>
        <button className='submit-btn' type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPage;
