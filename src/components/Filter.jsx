import React from "react";
import { useState, useEffect } from "react";
import StateCities from "./StateCities";

const Filter = (props) => {
  const { setBreweryType, breweries, setCityList, cityList, breweryType, handleChecked } = props;
  
  
  
  return (
    <aside class="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autocompete="off">
        <label for="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select
          name="filter-by-type"
          id="filter-by-type"
          onChange={(event) => setBreweryType(event.target.value)}
        >
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div class="filter-by-city-heading">
        <h3>Cities</h3>
        <button class="clear-all-btn">clear all</button>
      </div>
      <StateCities 
        breweries={breweries} 
        setCityList={setCityList}
        cityList={cityList}
        breweryType={breweryType}
        handleChecked={handleChecked}/>
    </aside>
  );
};

export default Filter;
