import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import restroList from "../../utils/demoData";
import { BASE_API } from "../../utils/constants";

const BodyComponent = () => {
  const [restrosList, setRestroList] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(BASE_API);
    const json = await data.json();
    console.log(json);
    setRestroList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body-area">
      <div className="filterArea">
        {/*Top rated Restaurant filter button*/}
        <button
          className="btn btn-primary  m-1"
          type="button"
          onClick={() => {
            const filterRestorsList = restrosList.filter(
              (restro) => restro?.info?.avgRating > 4
            );
            setRestroList(filterRestorsList);
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
            setRestroList(filterRestorsList);
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
            setRestroList(filterRestorsList);
          }}
        >
          Only Veg
        </button>
        {/* Reset Filter Button */}
        <button
          className="btn btn-warning  m-1"
          type="button"
          onClick={() => {
            setRestroList(restroList);
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="restaurant-cards row">
        {restrosList.map((restro) => (
          <RestaurantCards key={restro?.id?.id} restroData={restro} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
