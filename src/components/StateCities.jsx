import React from 'react'
import { useEffect, useState } from 'react';

const StateCities = (props) => {
    const { breweries, breweryType, handleChecked, handleClear } = props;
    const [cityList, setCityList] = useState([]);

    useEffect(() => {
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
            }
            cities = Array.from(new Set(cities));
            setCityList(cities);
    }, [breweries, breweryType]);

    

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
                            checked={checkTrueOrFalse(city)}
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
