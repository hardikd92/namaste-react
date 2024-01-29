import { RES_CARD_LOG_CND } from "../../utils/constants";

const RestaurantCards = (props) => {
    const restroData = props?.restroData;
    const { name, cloudinaryImageId, cuisines, sla, avgRatingString } =
      restroData?.info;
  
    return (
      <div className="">
        <div className="col card mr-2 ml-2">
          <img
            width="70"
            height="70"
            src={ RES_CARD_LOG_CND + cloudinaryImageId }
            className="card-img-top"
            alt="..."
            style={{ width: "85px", margin: "0px auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{cuisines.join(", ")}</li>
            <li className="list-group-item">{sla.slaString}</li>
            <li className="list-group-item">{avgRatingString + "Star"}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Order Now
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default RestaurantCards;