import { useState } from "react";

import "./HomePage.css";

function HomePage() {
  const [isDatabaseHovered, setIsDatabaseHovered] = useState(false);
  const [isRandomHovered, setIsRandomHovered] = useState(false);
  const [isLogHovered, setIsLogHovered] = useState(false);
  const [isEarthHovered, setIsEarthHovered] = useState(false);

  return (

    <div className="app-monitor">
      <div className="app-bezel">
        <div className="global-panel">
          <div className="homepage-panel">

            <div>
              <p className="global-code-header">▶_記入: </p>
              <p className="global-code-header">▶_書込中: select...</p>
            </div>

            <div className="homepage-panel-btn-container">
              <span className="homepage-database-btn">
                <button
                  onMouseEnter={() => setIsDatabaseHovered(true)}
                  onMouseLeave={() => setIsDatabaseHovered(false)}
                >
                  <a href="/places/all-places">▶_: load full database</a>
                </button>{" "}
              </span>

              <span className="homepage-random-btn">
                <button
                  onMouseEnter={() => setIsRandomHovered(true)}
                  onMouseLeave={() => setIsRandomHovered(false)}
                >
                  <a href="/places/random-place">▶_: load random destination</a>
                </button>{" "}
              </span>

              <span className="homepage-log-btn">
                <button
                  onMouseEnter={() => setIsLogHovered(true)}
                  onMouseLeave={() => setIsLogHovered(false)}
                >
                  <a href="/places/add-place">▶_: log new destination</a>
                </button>{" "}
              </span>


              <span className="homepage-earth-btn">
                <button
                  onMouseEnter={() => setIsEarthHovered(true)}
                  onMouseLeave={() => setIsEarthHovered(false)}
                >
                  <a href="/places/details/1">▶_: load [EARTH]</a>
                </button>{" "}
              </span>
            </div>

            <div className={`homepage-random-icon-1 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
            <div className={`homepage-random-icon-2 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
            <div className={`homepage-random-icon-3 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
            <div className={`homepage-random-icon-4 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
            <div className={`homepage-random-icon-5 ${isRandomHovered ? 'random-hovered' : ''}`}></div>
            <div className={`homepage-log-icon ${isLogHovered ? 'log-hovered' : ''}`}></div>
            <div className={`homepage-database-icon ${isDatabaseHovered ? 'database-hovered' : ''}`}></div>
            <div className={`homepage-earth-icon ${isEarthHovered ? 'earth-hovered' : ''}`}></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
