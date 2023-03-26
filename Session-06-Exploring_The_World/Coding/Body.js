import { restaurantList } from "../contants";
import { RestaurantCard } from "./restuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


//Body Component for body section: It contain all restaurant cards We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}


const Body = () => {
// useState: To create a state variable, searchText is local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setfilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

//useeffect
  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  
  }
  
  //not render components(Early return)
  if(!allRestaurants) return null;


  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>

        {/* <h1>{searchInput}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchInput, allRestaurants);
            // update the state of restaurants list
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
