import RestaurantCards from "./RestaurantCards";
import resObj from "../../utils/demoData";

const BodyComponent = () => {
    return (
      <div className="body-area row">
        {resObj.map((restro) => (
            <RestaurantCards key={restro?.id?.id} restroData={restro} />
        ))}
      </div>
    );
  };

  export default BodyComponent;