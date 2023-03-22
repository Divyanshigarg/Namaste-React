import { restaurantList } from "../contants";
import { RestaurantCard } from "./restuarantCard";
import { useState } from "react";


//Body Component for body section: It contain all restaurant cards We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

function filterData(searchInput, restaurants){
  const filterData= restaurants.filter((restaurant)=>
  restaurant.data.name.includes(searchInput)
  );
  return filterData;
}
const Body = () => {
// useState: To create a state variable, searchText is local state variable
  const [restaurants, setRestaurants] = useState(restaurantList);
const [searchInput, setSearchInput]  = useState("");

    return (
      <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)}></input>
        
{/* <h1>{searchInput}</h1> */}
        <button className="search-btn"
        onClick={() =>{
          // filter the data
          const data = filterData(searchInput, restaurants);
          // update the state of restaurants list
          setRestaurants(data);
        }}
        > Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        );
      })}
      </div>
      </>
    );
  };
  
  export default Body;