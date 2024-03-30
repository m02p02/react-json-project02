import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditLocationsPage() {
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");
  const [placeImage, setPlaceImage] = useState("");
  const [inhabitants, setInhabitants] = useState("");
  const [inhabitantsDescription, setInhabitantsDescription] = useState("");
  const [inhabitantsImage, setInhabitantsImage] = useState("");

  const { placeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        setPlaceName(response.data.placeName);
        setLocation(response.data.location);
        setPlaceDescription(response.data.placeDescription);
        setPlaceImage(response.data.placeImage);
        setInhabitants(response.data.inhabitants);
        setInhabitantsDescription(response.data.inhabitantsDescription);
        setInhabitantsImage(response.data.inhabitantsImage);
      })
      .catch((error) => {
        console.log("Error: unable to fetch location from API");
        console.log(error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
      .put(
        `https://exo-app-rest-api.adaptable.app/places/${placeId}`,
        requestBody
      )
      .then((response) => {
        navigate("/places/all-places");
      })
      .catch((error) => {
        console.log("Error: unable to edit location on API");
        console.log(error);
      });
  };

  return (

    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

          <div>
            <p className="global-code-header">▶_: 記入</p>
            <p className="global-code-header">
              ▶_: updating [{placeName ? placeName.toUpperCase() : ""}]...
            </p>
          </div>

          <div className="body-inner-scroll">
            <form className="input-place-form" onSubmit={handleFormSubmit}>
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
                ▶_: logging location -name
              </label>
              <input
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
                placeholder="▶_記入: updating location information..."
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
                name="inhabitants"
                placeholder="▶_: enter lifeforms or [unknown]..."
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
                update
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>

  );
}

export default EditLocationsPage;
