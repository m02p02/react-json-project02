import React from "react";
import { Route, Routes } from "react-router-dom";

import NavMenu from "./components/NavMenu/NavMenu.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AllLocationsPage from "./pages/AllLocationsPage/AllLocationsPage.jsx";
import LocationDetailsPage from "./pages/LocationDetailsPage/LocationDetailsPage.jsx";
import RandomLocationPage from "./pages/RandomLocationsPage/RandomLocationPage.jsx";
import EditLocationsPage from "./pages/EditLocationsPage/EditLocationsPage.jsx";
import AddLocationPage from "./pages/AddLocationsPage/AddLocationPage.jsx";

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places/all-places" element={<AllLocationsPage />} />
        <Route path="/places/details/:placeId" element={<LocationDetailsPage />} />
        <Route path="/places/random-place" element={<RandomLocationPage />} />
        <Route path="/places/edit/:placeId" element={<EditLocationsPage />} />
        <Route path="/places/add-place" element={<AddLocationPage />} />
      </Routes>
      <NavMenu />
    </div>
  );
}

export default App;