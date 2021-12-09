import { useState, useEffect } from "react";
import ListSection from "./components/ListSection";
import Header from "./components/Header";
import Filter from "./components/Filter";

export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState("");

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
  

  const handleSelectStateForm = (event) => {
    event.preventDefault();
    console.log("Inside handleSelectStateForm: ", event.target);
  };

  const handleSelectStateInput = (event) => {
    const input =  event.target.value
    setSelectedState(input);
  };

  const [breweryType, setBreweryType] = useState("")
  console.log(breweryType);

  return (
    <>
      <Header
        handleSubmit={handleSelectStateForm}
        handleInput={handleSelectStateInput}
      />
      <main>
        <aside >
          <Filter setBreweryType={setBreweryType} />
        </aside>
        <ListSection breweries={breweries} breweryType={breweryType} />
      </main>
    </>
  );
}
