import './App.css';
import React, {useEffect, useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';
import ConfirmedBooking from './components/ConfirmedBooking';
import Specials from './components/Specials';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import AboutSection from './components/AboutSection';

function App() {
  const [availableTimes, setAvailableTimes] = useState([]);
  

  return (
   <>
   <BrowserRouter>
    <Routes> 
      <Route path="/reserve" element={
        <BookingPage
        availableTimes={availableTimes} 
        setAvailableTimes={setAvailableTimes} />}>
      <Route path="booking-confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes> 
   </BrowserRouter>
   <Header/>
    <PromoBanner/>
      <Specials />
      <AboutSection/>
    <Footer/>
   </>
  );
}

export default App;
