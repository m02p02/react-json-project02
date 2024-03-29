import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

function LocationDetailsPage(props) {
  const [place, setPlace] = useState({});
  const { placeId } = useParams();

  const navigate = useNavigate();

  const editPlace = () => {
    navigate(`/edit/${placeId}`);
  };

  const getOnePlace = () => {
    axios
      .get(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOnePlace();
  }, []);

  const deletePlace = () => {
    axios
      .delete(`https://exo-app-rest-api.adaptable.app/places/${placeId}`)
      .then((response) => {
        navigate("/places/all-places");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

          <div>
            <p className="global-code-header">▶_記入: </p>
            <p className="global-code-header">
              ▶_済: location [{place.placeName ? place.placeName.toUpperCase() : ""}] loaded...
            </p>
          </div>

          <div className="body-inner-scroll place-container" key={place.id}>
            {place && (
              <>
                <Tabs
                  defaultActiveKey="place"
                  id="uncontrolled-tab-example"
                  className="mb-3 custom-tabs"
                >
                  <Tab eventKey="place" title="▶_: place">
                    <img
                      className="container-image"
                      src={place.placeImage || "/src/images/stormtroopers1.jpg"}
                      alt={place.placeName}
                      onError={(e) => {
                        e.target.src = "/src/images/stormtroopers1.jpg";
                      }}
                    />
                    <div className="tab-panel">
                      <h1>▶_名: {place.placeName}</h1>
                      <p>▶_: {place.location}</p>
                      <p>▶_: {place.placeDescription}</p>
                    </div>
                  </Tab>
                  <Tab eventKey="life" title="▶_: life">
                    <img
                      className="inhabitants-image"
                      src={
                        place.inhabitantsImage || "/src/images/stormtroopers1.jpg"
                      }
                      alt={place.inhabitants}
                      onError={(e) => {
                        e.target.src = "/src/images/stormtroopers1.jpg";
                      }}
                    />
                    <div className="tab-panel">
                      <h1>▶_人類: {place.inhabitants}</h1>
                      <p>▶_: {place.inhabitantsDescription}</p>
                    </div>
                  </Tab>
                </Tabs>

                <button
                  className="submit-btn"
                  onClick={() => navigate(`/places/edit/${placeId}`)}
                >
                  Update
                </button>
                <button
                  className="submit-btn"
                  onClick={function () {
                    deletePlace();
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>

  );
}

export default LocationDetailsPage;
