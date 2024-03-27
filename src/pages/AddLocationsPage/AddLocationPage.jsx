import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddLocationPage() {
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");
  const [placeImage, setPlaceImage] = useState("");
  const [inhabitants, setinhabitants] = useState("");
  const [inhabitantsDescription, setInhabitantsDescription] = useState("");
  const [inhabitantsImage, setInhabitantsImage] = useState("");

  const navigate = useNavigate();

  const submitAudio = new Audio("/src/audio/blaster.mp3");

  const handleSubmit = (e) => {
    e.preventDefault();

    submitAudio.play();
    const placeImageURL =
      placeImage.trim() !== "" ? placeImage : "/src/images/matrix.jpg";
    const inhabitantsImageURL =
      inhabitantsImage.trim() !== ""
        ? inhabitantsImage
        : "/src/images/matrix.jpg";
    const requestBody = {
      placeName: placeName,
      location: location,
      placeDescription: placeDescription,
      placeImage: placeImage,
      inhabitants: inhabitants,
      inhabitantsDescription: inhabitantsDescription,
      inhabitantsImage: inhabitantsImage,
    };

    axios
      .post("https://exo-app-rest-api.adaptable.app/places/", requestBody)
      .then((response) => {
        navigate("/places/all-places");
      })
      .catch((error) => {
        console.log("error creating place in the API");
        console.log(error);
      });
  };

  useEffect(() => {
    const keyboardClickAudio = new Audio("/src/audio/keyboard.mp3");
    const handleKeyPress = () => {
      keyboardClickAudio.play();
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

          <div>
            <p className="component-header">▶_記入: </p>
            <p className="component-header">▶_書込中: logging new discovery...</p>
          </div>

          <div className="body-div">
            <form className="input-place-form" onSubmit={handleSubmit}>
              <label className="input-label">
                ▶_placeName_名前_▶_: --required-- /済
                <input
                  type="text"
                  name="Place"
                  placeholder="▶_記入: logging name..."
                  required={true}
                  value={placeName}
                  onChange={(e) => {
                    setPlaceName(e.target.value);
                  }}
                />
              </label>
              <label className="input-label">
                ▶_location_場所_▶_: --required-- /済
                <input
                  type="text"
                  name="Location"
                  placeholder="▶_記入: logging location..."
                  required={true}
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </label>
              <label className="input-textarea">
                ▶_description_▶_: --if:NONE-- input_"unknown"_/済
                <textarea
                  type="text"
                  name="Description"
                  placeholder="▶_記入: updating location information..."
                  required={true}
                  value={placeDescription}
                  onChange={(e) => {
                    setPlaceDescription(e.target.value);
                  }}
                />
              </label>
              <label className="input-label">
                ▶_URL_placeImage_画像_▶_: if:NONE-- input_ _/済
                <input
                  type="text"
                  name="Place Image"
                  placeholder="▶_記入: expecting URL..."
                  required={false}
                  value={placeImage}
                  onChange={(e) => {
                    setPlaceImage(e.target.value);
                  }}
                />
              </label>
              <label className="input-label">
                ▶_inhabitants_人類_▶_: --if:UNKNOWN-- input_"unknown"_/済
                <input
                  type="text"
                  name="Inhabitants"
                  placeholder="▶_記入: logging life form..."
                  required={true}
                  value={inhabitants}
                  onChange={(e) => {
                    setinhabitants(e.target.value);
                  }}
                />
              </label>
              <label className="input-textarea">
                ▶_description_▶_: --if:NONE-- input_"unknown"_/済
                <textarea
                  type="text"
                  name="Inhabitants description"
                  placeholder="▶_記入: updating life form information..."
                  required={true}
                  value={inhabitantsDescription}
                  onChange={(e) => {
                    setInhabitantsDescription(e.target.value);
                  }}
                />
              </label>
              <label className="input-label">
                ▶_URL_inhabitantImage_画像_▶_: --if:NONE-- input_ _/済
                <input
                  type="text"
                  name="Inhabitants Image"
                  placeholder="▶_記入: expecting URL..."
                  required={false}
                  value={inhabitantsImage}
                  onChange={(e) => {
                    setInhabitantsImage(e.target.value);
                  }}
                />
              </label>
              <button className="submit-btn" type="submit">
                Add to Database
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AddLocationPage;
