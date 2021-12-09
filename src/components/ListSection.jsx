import React from "react";

const ListSection = (props) => {
  const { breweries, breweryType } = props;
  console.log(breweryType);
  console.log(breweries);

  return (
    <div>
      <h1>List of Breweries from New York</h1>
      <header className="search-bar">
        <form id="search-breweries-form" autocomplete="off">
          <label htmlFor="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input id="search-breweries" name="search-breweries" type="text" />
        </form>
      </header>
        <ul className="breweries-list">
            
          {breweries.filter((brewery) => {
              if (brewery.brewery_type === breweryType){
                  return brewery
              } else if ()
          }).map((brewery) => {
            return (
              <li>
                <h2>{brewery.name}</h2>
                <div className="type">brewpub</div>
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
                  <button>Book a tour</button>
                </section>
                <section className="link">
                  <a href={brewery.website_url} target="_blank">
                    Visit Website
                  </a>
                </section>
              </li>
            );
          })}
          // More list elements
        </ul>
      
    </div>
  );
};

export default ListSection;
