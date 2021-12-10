import React from 'react'

const StateCities = (props) => {
    const {breweries, setCityList, cityList} = props;
    console.log("here", cityList)

    const handleToggleCheck = (e) => {
        const checked = e.target.checked;
        const city = {
            cityName: e.target.name,
            checked: checked
          }
    
        setCityList([...cityList, city])
        
    }

    return (
        <form id="filter-by-city-form">
            {breweries.map(brewery => {
                return(
                    <div>
                        <input 
                            type="checkbox" 
                            name={brewery.city} 
                            value={brewery.city}
                            onChange={handleToggleCheck}
                            />

                        <label for={brewery.city}>
                            {brewery.city}
                        </label>
                    </div>
                )
            })}
            
        </form>
    )
}

export default StateCities
