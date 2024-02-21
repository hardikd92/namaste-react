import { RES_CARD_LOG_CND } from "../../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCards = (props) => {
  const restroData = props?.restroData;
  const { id, name, cloudinaryImageId, cuisines, sla, avgRatingString } =
    restroData?.info;
  const imageLink = RES_CARD_LOG_CND + cloudinaryImageId;
  return (
    <div className="col-md-2 restaurant-card">
      <div className="card m-2">
        <img className="card-img" alt={name} src={imageLink} />
        <div className="card-body">
          <p className="card-text">{name}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <small>{cuisines.join(", ")}</small>
          </li>
          <li className="list-group-item">
            <small>{sla.slaString}</small>
          </li>
          <li className="list-group-item">
            <small>{avgRatingString + " Star"}</small>
          </li>
        </ul>
        <div className="card-body">
          <Link to={"/" + id} className="card-link">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
