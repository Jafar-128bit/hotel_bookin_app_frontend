import './Featured.css';
import featuredPhoto_01 from '../../assets/featured_photos/featured_01.webp';
import featuredPhoto_02 from '../../assets/featured_photos/featured_02.webp';
import featuredPhoto_03 from '../../assets/featured_photos/featured_03.webp';

const Featured = () => {
    return (
        <div className="Featured">
            <div className="Feature__items">
                <img className="Featured__image" src={featuredPhoto_01} alt=""/>
                <div className="Featured__titles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="Feature__items">
                <img className="Featured__image" src={featuredPhoto_02} alt=""/>
                <div className="Featured__titles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="Feature__items">
                <img className="Featured__image" src={featuredPhoto_03} alt=""/>
                <div className="Featured__titles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
