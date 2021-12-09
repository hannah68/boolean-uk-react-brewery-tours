import React from 'react'

const ListSection = () => {

    return (
    <div>
        <h1>List of Breweries from New York</h1>
        <header className="search-bar">
        <form id="search-breweries-form" autocomplete="off">
            <label htmlFor="search-breweries"><h2>Search breweries:</h2></label>
            <input id="search-breweries" name="search-breweries" type="text" />
        </form>
        </header>
        <article>
            <ul className="breweries-list">
                <li>
                <h2>12 Gates Brewing Company</h2>
                <div className="type">brewpub</div>
                <section className="address">
                    <h3>Address:</h3>
                    <p>80 Earhart Dr Ste 20</p>
                    <p><strong>Williamsville, 14221-7804</strong></p>
                </section>
                <section className="phone">
                    <h3>Phone:</h3>
                    <p>7169066600</p>
                </section>
                <section className="booking"><button>Book a tour</button></section>
                <section className="link">
                    <a href="http://www.12gatesbrewing.com" target="_blank"
                    >Visit Website</a
                    >
                </section>
                <section className="booking-form">
                    <h3>Book a tour:</h3>
                    <form>
                    <label
                        >First Name<input type="text" name="firstName" value="" /></label
                    ><label>Last Name<input type="text" name="lastName" value="" /></label
                    ><label>Tour date<input type="date" name="date" value="" /></label
                    ><label
                        >Time<input
                        type="time"
                        name="time"
                        min="09:00"
                        max="18:00"
                        step="3600"
                        value="" /></label
                    ><label
                        >No. people<input
                        type="number"
                        min="1"
                        max="10"
                        name="peopleCount"
                        value="" /></label
                    ><input type="submit" value="Book Now!" />
                    </form>
                </section>
                </li>
                // More list elements
            </ul>
        </article>
</div>
    )
}

export default ListSection
