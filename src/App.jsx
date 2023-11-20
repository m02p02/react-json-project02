import React from 'react'
import { Route, Routes } from "react-router-dom"

import Header from './components/Header.jsx';
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AllLocationsPage from './pages/AllLocationsPage.jsx';
import LocationDetailsPage from "./pages/LocationDetailsPage"
import RandomLocationPage from './pages/RandomLocationPage.jsx';
import AddLocationPage from "./pages/AddLocationPage"
import Footer from './components/Footer.jsx';

import './App.css'

function App() {

  return (
    
    <>
      
      <Header />  
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all-locations' element={<AllLocationsPage />} />
        <Route path='/location-details' element={<LocationDetailsPage />} />
        <Route path='/random-location' element={<RandomLocationPage />} />
        <Route path='/add-location' element={<AddLocationPage />} />
        <Route path='/places/:placeId' element={<LocationDetailsPage />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App;