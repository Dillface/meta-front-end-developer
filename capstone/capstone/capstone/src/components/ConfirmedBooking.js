import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Booking Confirmed</h2>
      <p>Your booking has been successfully confirmed!</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default ConfirmedBooking;