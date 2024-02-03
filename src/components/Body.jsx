import { useState } from "react";
import RestaurantCards from "./RestaurantCards";
import restroList from "../../utils/demoData";

const BodyComponent = () => {
  const [restrosList, setRestroList] = useState(restroList);

  return (
    <div className="body-area row">
      <div className="filterArea">
        {/*Top rated Restaurant filter button*/}
        <button
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
          type="button"
          onClick={() => {
            setRestroList(restroList);
          }}
        >
          Reset Filter
        </button>
      </div>

      {restrosList.map((restro) => (
        <RestaurantCards key={restro?.id?.id} restroData={restro} />
      ))}
    </div>
  );
};

export default BodyComponent;
