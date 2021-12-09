import React from "react";

const BookingForm = () => {
  return (
    <form id="search-breweries-form">
      <label>
        First Name
        <input type="text" name="firstName" value="" />
      </label>
      <label>
        Last Name
        <input type="text" name="lastName" value="" />
      </label>
      <label>
        Tour date
        <input type="date" name="date" value="" />
      </label>
      <label>
        Time
        <input
          type="time"
          name="time"
          min="09:00"
          max="18:00"
          step="3600"
          value=""
        />
      </label>
      <label>
        No. people
        <input type="number" min="1" max="10" name="peopleCount" value="" />
      </label>
      <input type="submit" value="Book Now!" />
    </form>
  );
};

export default BookingForm;
