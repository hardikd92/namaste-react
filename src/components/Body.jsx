import RestaurantCards from "./RestaurantCards";
import resObj from "../../utils/demoData";

const BodyComponent = () => {
    return (
      <div className="body-area" style={{ display: "flex" }}>
        {resObj.map((restro) => (
          <RestaurantCards restroData={restro} />
        ))}
      </div>
    );
  };

  export default BodyComponent;