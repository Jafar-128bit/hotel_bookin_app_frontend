import './SearchItem.css';
import searchItemPhoto_01 from '../../assets/searchItem_Photo/searchItemPhoto.webp';

const SearchItem = () => {
    return (
        <div className="SearchItem">
            <img
                className="SearchItem__image"
                src={searchItemPhoto_01}
                alt="img"
            />
            <div className="SearchItem__description">
                <h1 className="SearchItem__title">Tower Street Apartments</h1>
                <span className="SearchItem__distance">500m from center</span>
                <span className="SearchItem__taxiOp">Free airport taxi</span>
                <span className="SearchItem__subtitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="SearchItem__features">
                    Entire Studio - 1 bathroom - 21m 1 full bed
                </span>
                <span className="SearchItem__cancelOp">Free cancellation</span>
                <span className="SearchItem__cancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="SearchItem__details">
                <div className="SearchItem__rating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="SearchItem__detailText">
                    <span className="SearchItem__price">$123</span>
                    <span className="SearchItem__TaxOp">Includes taxes and free</span>
                    <button className="SearchItem__checkButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
