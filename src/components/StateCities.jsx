import React from 'react'
import { useEffect, useState } from 'react';

const StateCities = (props) => {
    const { breweries, breweryType, handleChecked } = props;
    // console.log(breweries, breweryType);
    const [cityList, setCityList] = useState([]);

    useEffect(() => {
        // const showCities = () => {
            // console.log("inStateCities", breweryType);
            let cities = [];
            if (breweryType === "") {
                cities = breweries.map(el => {
                    return el.city;
                })
            } else {
                cities = breweries.filter(el => {
                    if (el.brewery_type === breweryType) {
                        console.log("STRING", el.city)
                        return el
                    }
                }).map(el => {
                    return el.city
                })
                // console.log("Steve!", cities)
            }
            cities = Array.from(new Set(cities));
            setCityList(cities);
            
        // }
        // showCities();
        // console.log("HERE", cityList);
    }, [breweries, breweryType]);
    // console.log("CITY LIST", cityList);

    return (
        <form id="filter-by-city-form">
            {cityList.map(city => {
                return(
                    <div>
                        <input 
                            type="checkbox" 
                            name={city} 
                            value={city}
                            onChange={handleChecked}
                        />
                        <label for={city}>
                            {city}
                        </label>
                    </div>
                )
            })}
            
        </form>
    )
}

export default StateCities
