import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditDeleteLocation() {
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [inhabitants, setinhabitants] = useState("");
  const [inhabitantsDescription, setInhabitantsDescription] = useState("");

  const { placeId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        setPlaceName(response.data.placeName);
        setLocation(response.data.location);
        setDescription(response.data.description);
        setinhabitants(response.data.inhabitants);
        setInhabitantsDescription(response.data.inhabitantsDescription);
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
      inhabitants: inhabitants,
      inhabitantsDescription: inhabitantsDescription,
    };

    axios
      .put(
        `https://exo-app-rest-api.adaptable.app/places/${placeId}`,
        requestBody
      )
      .then((response) => {
        navigate(`/places/${placeId}`);
      })
      .catch((error) => {
        console.log("error updating project");
        console.log(error);
      });
  };

  const deleteProject = () => {
    axios
      .delete(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        navigate("/places");
      })
      .catch((error) => {
        console.log("Error deleting project...");
        console.log(error);
      });
  };

  return (
    <div className="EditDeletePage">
      <h3>This is Edit-Delete</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
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
        <label>
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
        <label>
          Description
          <input
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
        <label>
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
        <label>
          Inhabitants Description
          <input
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
        <button type="submit">Update Place</button>
      </form>
        <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditDeleteLocation;
