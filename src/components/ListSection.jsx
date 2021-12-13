import React from "react";
import ListItem from "./ListItem";

const ListSection = (props) => {
    const { breweries, breweryType, cities, selectedState} = props;

    const stateValue = selectedState;

    return (
        <div>
            <h1>List of Breweries from {stateValue}</h1>
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
                    if (!breweryType && cities.length == 0) {
                        return breweries
                    } else if (brewery.brewery_type === breweryType && cities.length == 0) {
                        return brewery
                    } else if (brewery.brewery_type === breweryType && cities.includes(brewery.city)){
                        return brewery
                    } else if (cities.includes(brewery.city)) {
                        return brewery
                    }
                }).map((brewery) => {
                    return (
                        <ListItem 
                        brewery={brewery}/>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListSection;
