import { useState, useEffect } from "react";
import ListSection from "./components/ListSection";
import Header from "./components/Header";
import Filter from "./components/Filter";

const initialCityList = [
  {
    city: '',
    checked: false
  }
]

export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [breweryType, setBreweryType] = useState("");
  const [cities, setCities] = useState([]);

  const handleChecked = event => {
    let city = event.target.value;
      if (cities.includes(city)) {
        setCities(cities.filter(el => el!== city));
      } else { 
        setCities([...cities, city]) 
      }
  }
  
  useEffect(() => {
    if(!selectedState) return;
    
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
      .then(res => res.json())
      .then(data => {
        const filteredArr = data.filter(type => {
          return type.brewery_type === "micro" || type.brewery_type === "regional" || type.brewery_type === "brewpub"
        });
        setBreweries(filteredArr);
      })
  },[selectedState]);


  const handleSelectStateForm = (event) => {
    event.preventDefault();
  };

  const handleSelectStateInput = (event) => {
    const input =  event.target.value
    setSelectedState(input);
  };

  return (
    <>
      <Header
        handleSubmit={handleSelectStateForm}
        handleInput={handleSelectStateInput}
      />
      <main>
        <aside >
          <Filter 
          setBreweryType={setBreweryType} 
          breweries={breweries}
          breweryType={breweryType}
          handleChecked={handleChecked}
          />
        </aside>
        <ListSection 
          breweries={breweries} 
          breweryType={breweryType} 
          cities={cities}
          selectedState={selectedState}
        />
      </main>
    </>
  );
}
