import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL, BROKEN_IMG } from "/config";

import "./AllLocationsPage.css";

function AllLocationsPage() {
  const [place, setPlace] = useState([]);

  const displayAllPlaces = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    displayAllPlaces();
  }, []);

  return (

    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">

            <div>
              <p className="global-code-header">▶_: 記入</p>
              <p className="global-code-header">
                ▶_: all locations loaded...
              </p>
            </div>

            <div className="body-inner-scroll location-cards-container">
              {place.map((place) => (
                <Card
                  key={place.id}
                  className="location-cards"
                  style={{ width: "15rem" }}
                >
                  <div>
                    <Card.Img
                      variant="top"
                      src={place.placeImage}
                      onError={(e) => {
                        e.target.src = BROKEN_IMG;
                      }}
                    />
                    <Card.Body>
                      <Link to={`/places/details/${place.id}`}>
                        <div className="location-cards-font">
                          <Card.Title className="card-font">
                            ▶_: {place.placeName}
                          </Card.Title>
                        </div>
                      </Link>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>


  );
}

export default AllLocationsPage;
