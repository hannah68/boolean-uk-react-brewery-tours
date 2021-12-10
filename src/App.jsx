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
  const [cityList, setCityList] = useState(initialCityList);

  console.log(cityList);
  console.log("State: ", { breweries, selectedState });

  useEffect(() => {
    if(!selectedState) return;
    
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const filteredArr = data.filter(type => {
          return type.brewery_type === "micro" || type.brewery_type === "regional" || type.brewery_type === "brewpub"
        });

        setBreweries(filteredArr);
        console.log(breweries);
      })
  },[selectedState]);

  
  const handleCityList = (breweries) => {
    const newCityList=[]
    const city = {
      city: '',
      checked: false
    }

    breweries.map(brewery => {
      return (
        newCityList.push(city.city = brewery.city,
          city.checked = false
        )
      )
    })

    setCityList(newCityList)
    
  }

  const handleSelectStateForm = (event) => {
    event.preventDefault();
    console.log("Inside handleSelectStateForm: ", event.target);
  };

  const handleSelectStateInput = (event) => {
    const input =  event.target.value
    setSelectedState(input);
  };

  console.log(breweryType);

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
          setCityList={setCityList}
          cityList={cityList} 
          />
        </aside>
        <ListSection 
          breweries={breweries} 
          breweryType={breweryType}
          cityList={cityList} 
        />
      </main>
    </>
  );
}
