import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, BROKEN_IMG } from "/config";

function AddLocationPage() {
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");
  const [placeImage, setPlaceImage] = useState("");
  const [inhabitants, setInhabitants] = useState("");
  const [inhabitantsDescription, setInhabitantsDescription] = useState("");
  const [inhabitantsImage, setInhabitantsImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const placeImageURL =
      placeImage.trim() !== ""
      ? placeImage
      : BROKEN_IMG;

    const inhabitantsImageURL =
      inhabitantsImage.trim() !== ""
        ? inhabitantsImage
        : BROKEN_IMG;

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
      .post(API_URL, requestBody)
      .then((response) => {
        navigate("/places/all-places");
      })
      .catch((error) => {
        console.log("Error: unable to log new location in the API");
        console.log(error);
      });
  };

  return (
    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

          <div>
            <p className="global-code-header">▶_: 記入</p>
            <p className="global-code-header">▶_: logging new discovery...</p>
          </div>

          <div className="body-inner-scroll form-container">
            <form className="input-place-form" onSubmit={handleSubmit}>
              <label
                className="input-label"
                htmlFor="place-name">
                ▶_: logging name
              </label>
              <input
                type="text"
                id="place-name"
                name="place"
                placeholder="▶_: enter place name..."
                required={true}
                value={placeName}
                onChange={(e) => {
                  setPlaceName(e.target.value);
                }}
              />
              <label
                className="input-label"
                htmlFor="location">
                ▶_: logging location -where
              </label>
              <textarea
                type="text"
                id="location"
                name="location"
                placeholder="▶_: enter location..."
                required={true}
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <label
                className="input-textarea"
                htmlFor="location-description">
                ▶_: logging location -description
              </label>
              <textarea
                type="text"
                id="location-description"
                name="description"
                placeholder="▶_: enter location description or [unknown]..."
                required={true}
                value={placeDescription}
                onChange={(e) => {
                  setPlaceDescription(e.target.value);
                }}
              />
              <label
                className="input-label"
                htmlFor="location-image-url">
                ▶_: logging image URL -location
              </label>
              <input
                type="text"
                id="location-image-url"
                name="place Image"
                placeholder="▶_: enter URL or [ ]..."
                required={false}
                value={placeImage}
                onChange={(e) => {
                  setPlaceImage(e.target.value);
                }}
              />
              <label
                className="input-label"
                htmlFor="inhabitants-name">
                ▶_: logging lifeforms -inhabitants
              </label>
              <input
                type="text"
                id="inhabitants-name"
                name="Inhabitants"
                placeholder="▶_: enter name or [unknown]..."
                required={true}
                value={inhabitants}
                onChange={(e) => {
                  setInhabitants(e.target.value);
                }}
              />
              <label
                className="input-textarea"
                htmlFor="inhabitants-description">
                ▶_: logging inhabitants -description
              </label>
              <textarea
                type="text"
                id="inhabitants-description"
                name="inhabitants-description"
                placeholder="▶_: enter inhabitant information or [unknown]..."
                required={true}
                value={inhabitantsDescription}
                onChange={(e) => {
                  setInhabitantsDescription(e.target.value);
                }}
              />
              <label
                className="input-label"
                htmlFor="inhabitants-image-url">
                ▶_: logging image URL -inhabitants
              </label>
              <input
                type="text"
                id="inhabitants-image-url"
                name="inhabitants-image"
                placeholder="▶_: enter URL or [ ]..."
                required={false}
                value={inhabitantsImage}
                onChange={(e) => {
                  setInhabitantsImage(e.target.value);
                }}
              />
              <button className="form-submit-btn" type="submit">
                add to database
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddLocationPage;
