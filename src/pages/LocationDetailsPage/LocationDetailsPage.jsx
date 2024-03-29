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
            <p className="global-code-header">▶_: 記入</p>
            <p className="global-code-header">
              ▶_: location [{place.placeName ? place.placeName.toUpperCase() : ""}] loaded...
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
                      src={place.placeImage || "/src/images/broken-pip04.png"}
                      alt={place.placeName}
                      onError={(e) => {
                        e.target.src = "/src/images/broken-pip04.png";
                      }}
                    />
                    <div className="tab-panel">
                      <p className="tab-panel-name">▶_: {place.placeName}</p>
                      <p className="tab-panel-location">▶_: {place.location}</p>
                      <p className="tab-panel-description">▶_: {place.placeDescription}</p>
                    </div>
                  </Tab>
                  <Tab eventKey="life" title="▶_: life">
                    <img
                      className="inhabitants-image"
                      src={
                        place.inhabitantsImage || "/src/images/broken-pip04.png"
                      }
                      alt={place.inhabitants}
                      onError={(e) => {
                        e.target.src = "/src/images/broken-pip04.png";
                      }}
                    />
                    <div className="tab-panel">
                      <p className="tab-panel-name">▶_: {place.inhabitants}</p>
                      <p className="tab-panel-description">▶_: {place.inhabitantsDescription}</p>
                    </div>
                  </Tab>
                </Tabs>

                <button
                  className="submit-btn"
                  onClick={() => navigate(`/places/edit/${placeId}`)}
                >
                  ▶_: update
                </button>
                <button
                  className="submit-btn"
                  onClick={function () {
                    deletePlace();
                  }}
                >
                  ▶_: delete
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
