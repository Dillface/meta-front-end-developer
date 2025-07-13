import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spinner from '../assets/spinner.gif'

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Booking Confirmed</h2>
      <p>Your booking has been successfully confirmed!</p>
      <p>Returning you to the homepage</p>
      <img
        src={spinner}
        alt="Loading Spinner"
        style={{ width: '50px', height: '50px', marginTop: '20px' }}
      />
    </div>
  );
};

export default ConfirmedBooking;