import './PropertyList.css';
import propertiesImage_01 from '../../assets/propertiesPhotos/propertiesPhotos_01.webp';
import propertiesImage_02 from '../../assets/propertiesPhotos/propertiesPhotos_02.jpg';
import propertiesImage_03 from '../../assets/propertiesPhotos/propertiesPhotos_03.jpg';
import propertiesImage_04 from '../../assets/propertiesPhotos/propertiesPhotos_04.jpg';
import propertiesImage_05 from '../../assets/propertiesPhotos/propertiesPhotos_05.jpg';
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
        const images = [
            propertiesImage_01,
            propertiesImage_02,
            propertiesImage_03,
            propertiesImage_04,
            propertiesImage_05
        ];
        const {data, loading, error, reFetch} = useFetch('http://localhost:3300/api/v1/hotels/getAll/countByType');
        return (
            <div className="PropertyList">
                {loading ? ("Loading please wait...") : (<>{data && images.map(((value, index, array) => {
                    return (
                        <div className="PropertyList__items" key={index}>
                            <img className="PropertyList__image" src={value} alt="img"/>
                            <div className="PropertyList__titles">
                                <h1>{data[index]?.type}</h1>
                                <h2>{data[index]?.count} {data[index]?.type}s</h2>
                            </div>
                        </div>
                    );
                }))}</>)}
            </div>
        );
    }
;

export default PropertyList;
