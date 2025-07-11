import './App.css';
import React, {useEffect, useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';
import ConfirmedBooking from './components/ConfirmedBooking';
import Specials from './components/Specials';
import { AlertProvider } from "./context/alertContext";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';


function App() {
  const [availableTimes, setAvailableTimes] = useState([]);

  return (
   <>
    <AlertProvider> 
   <BrowserRouter>
    <Routes> 
      <Route path="/Reserve" element={
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
    <Footer/>
    </AlertProvider>
   </>
  );
}

export default App;
