import './SearchItem.css';
import searchItemPhoto_01 from '../../assets/searchItem_Photo/searchItemPhoto.webp';
import {Link} from "react-router-dom";

const SearchItem = ({data}) => {
    return (
        <div className="SearchItem">
            <img
                className="SearchItem__image"
                src={searchItemPhoto_01}
                alt="img"
            />
            <div className="SearchItem__description">
                <h1 className="SearchItem__title">{data.name}</h1>
                <span className="SearchItem__distance">{data.distance}m from center</span>
                <span className="SearchItem__taxiOp">Free airport taxi</span>
                <span className="SearchItem__subtitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="SearchItem__features">
                    {data.description}
                </span>
                <span className="SearchItem__cancelOp">Free cancellation</span>
                <span className="SearchItem__cancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="SearchItem__details">
                {data?.rating && <div className="SearchItem__rating">
                    <span>Excellent</span>
                    <button>{data.rating}</button>
                </div>}
                <div className="SearchItem__detailText">
                    <span className="SearchItem__price">${data.cheapestPrice}</span>
                    <span className="SearchItem__TaxOp">Includes taxes and free</span>
                    <Link to={`/hotels/${data._id}`}>
                        <button className="SearchItem__checkButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
