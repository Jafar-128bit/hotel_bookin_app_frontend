import './PropertyList.css';
import propertiesImage_01 from '../../assets/propertiesPhotos/propertiesPhotos_01.webp';
import propertiesImage_02 from '../../assets/propertiesPhotos/propertiesPhotos_02.jpg';
import propertiesImage_03 from '../../assets/propertiesPhotos/propertiesPhotos_03.jpg';
import propertiesImage_04 from '../../assets/propertiesPhotos/propertiesPhotos_04.jpg';
import propertiesImage_05 from '../../assets/propertiesPhotos/propertiesPhotos_05.jpg';

const PropertyList = () => {
    return (
        <div className="PropertyList">
            <div className="PropertyList__items">
                <img className="PropertyList__image" src={propertiesImage_01} alt="img"/>
                <div className="PropertyList__titles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="PropertyList__items">
                <img className="PropertyList__image" src={propertiesImage_02} alt="img"/>
                <div className="PropertyList__titles">
                    <h1>Apartments</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="PropertyList__items">
                <img className="PropertyList__image" src={propertiesImage_03} alt="img"/>
                <div className="PropertyList__titles">
                    <h1>Resorts</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="PropertyList__items">
                <img className="PropertyList__image" src={propertiesImage_04} alt="img"/>
                <div className="PropertyList__titles">
                    <h1>Villas</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="PropertyList__items">
                <img className="PropertyList__image" src={propertiesImage_05} alt="img"/>
                <div className="PropertyList__titles">
                    <h1>Cabins</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;
