import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import restroList from "../../utils/demoData";
import { BASE_API } from "../../utils/constants";
import Shimmer from "./layout/Shimmer";

const BodyComponent = () => {
  const [restrosList, setRestroList] = useState([]);
  const [filteredRestrosList, setfilteredRestrosList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log("Body Component before useEffects....");
  useEffect(() => {
    console.log("Body Component inside useEffects....");
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(BASE_API);
    const json = await data.json();
    setRestroList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestrosList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restrosList.length === 0 ? (
    <div style={{ display: "flex" }}>
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <div className="body-area">
      <div className="filterArea d-flex">
        <div className="filter-area">
          {/*Top rated Restaurant filter button*/}
          <button
            className="btn btn-primary  m-1"
            type="button"
            onClick={() => {
              const filterRestorsList = restrosList.filter(
                (restro) => restro?.info?.avgRating > 4
              );
              setfilteredRestrosList(filterRestorsList);
            }}
          >
            Top Rated Restaurant
          </button>
          {/* Lowest Delivery Time Filter Button */}
          <button
            className="btn btn-primary  m-1"
            type="button"
            onClick={() => {
              const filterRestorsList = restrosList.filter(
                (restro) => restro?.info?.sla?.deliveryTime < 20
              );
              setfilteredRestrosList(filterRestorsList);
            }}
          >
            Lowest Delivery Time
          </button>
          {/* Only Veg Filter Button */}
          <button
            className="btn btn-success  m-1"
            type="button"
            onClick={() => {
              const filterRestorsList = restrosList.filter(
                (restro) => restro?.info?.veg == true
              );
              setfilteredRestrosList(filterRestorsList);
            }}
          >
            Only Veg
          </button>
          {/* Reset Filter Button */}
          <button
            className="btn btn-warning  m-1"
            type="button"
            onClick={() => {
              setfilteredRestrosList(restroList);
            }}
          >
            Reset Filter
          </button>
        </div>
        <div className="search-area">
          <div className="input-group m-1 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Restaurant"
              aria-label="Restaurant name"
              aria-describedby="button-addon2"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-secondary  mr-2"
              type="button"
              id="button-addon2"
              onClick={() => {
                const filteredRestroList = restrosList.filter((restro) =>
                  restro?.info?.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
                setfilteredRestrosList(filteredRestroList);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="restaurant-cards row">
        {filteredRestrosList.map((restro) => (
          <RestaurantCards key={restro?.id} restroData={restro} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
