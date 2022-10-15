import './FeaturedProperties.css';
import FeaturedPropertiesImage_01 from '../../assets/featuredProperties/featuredProperties_01.webp';
import FeaturedPropertiesImage_02 from '../../assets/featuredProperties/featuredProperties_02.jpg';
import FeaturedPropertiesImage_03 from '../../assets/featuredProperties/featuredProperties_03.jpg';
import FeaturedPropertiesImage_04 from '../../assets/featuredProperties/featuredProperties_04.jpg';
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
    const images = [
        FeaturedPropertiesImage_01,
        FeaturedPropertiesImage_02,
        FeaturedPropertiesImage_03,
        FeaturedPropertiesImage_04
    ];
    const {
        data,
        loading,
    } = useFetch('http://localhost:3300/api/v1/hotels/getAll/featuredOnly');
    return (
        <div className="FeaturedProperties">
            {loading ?
                "Loading wait..." :
                <>{data && images.map((value, index, array) => {
                    return (
                        <div className="FeaturedProperties__items" key={index}>
                            <img
                                src={value}
                                alt="img"
                                className="FeaturedProperties__image"
                            />
                            <span className="FeaturedProperties__Name">{data[index]?.name}</span>
                            <span className="FeaturedProperties__city">{data[index]?.city}</span>
                            <span
                                className="FeaturedProperties__price">Stating from ${data[index]?.cheapestPrice}</span>
                            {data.rating && <div className="FeaturedProperties__rating">
                                <button type="button">{data[index]?.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    );
                })}</>
            }
        </div>
    );
};

export default FeaturedProperties;
