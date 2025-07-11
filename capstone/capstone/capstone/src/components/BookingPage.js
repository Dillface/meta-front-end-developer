import React from "react";
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
  return (
    <>
        <BookingForm
         availableTimes={availableTimes}
         setAvailableTimes={setAvailableTimes}
         />
    </>
  );
};
export default BookingPage;
