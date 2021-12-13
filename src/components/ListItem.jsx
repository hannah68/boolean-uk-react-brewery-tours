import React from 'react'
import BookingForm from "./BookingForm";
import { useState } from "react";

const ListItem = (props) => {
    const {brewery} = props;
    const [showBooking, setShowBooking] = useState(false);

    const handleClickBooking =() => {
        setShowBooking(!showBooking)
    }

    return (
        <li>
            <h2>{brewery.name}</h2>
            <div className="type">{brewery.brewery_type}</div>
            <section className="address">
                <h3>Address:</h3>
                <p>{brewery.street}</p>
                <p>
                    <strong>{`${brewery.city} ${brewery.postal_code}`}</strong>
                </p>
            </section>
            <section className="phone">
                <h3>Phone:</h3>
                <p>{brewery.phone}</p>
            </section>
                    
            <section className="booking">
                {showBooking && <BookingForm/>}
                <button onClick={handleClickBooking}>Book a tour</button>
            </section>
            <section className="link">
                <a href={brewery.website_url} target="_blank">
                    Visit Website
                </a>
            </section>
        </li>
    )
}

export default ListItem
