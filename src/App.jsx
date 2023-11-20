import React from 'react'
import { Route, Routes } from "react-router-dom"

import Header from './components/Header.jsx';
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AllLocationsPage from './pages/AllLocationsPage.jsx';
import LocationDetailsPage from "./pages/LocationDetailsPage"
import RandomLocationPage from './pages/RandomLocationPage.jsx';
import AddLocationPage from "./pages/AddLocationPage"
import EditDeletePage from './pages/EditDeletePage.jsx';
import Footer from './components/Footer.jsx';

import './App.css'

function App() {

  return (
    
    <>
      
      <Header />  
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/places/all-places' element={<AllLocationsPage />} />
        <Route path='/places/details/:placeId' element={<LocationDetailsPage />} />
        <Route path='/places/random-place' element={<RandomLocationPage />} />
        <Route path='/places/Edit-delete' element={<EditDeletePage />} />
        <Route path='/places/add-place' element={<AddLocationPage />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App;