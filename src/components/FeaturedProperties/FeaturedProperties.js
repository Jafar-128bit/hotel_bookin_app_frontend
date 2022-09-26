import './FeaturedProperties.css';
import FeaturedPropertiesImage_01 from '../../assets/featuredProperties/featuredProperties_01.webp';
import FeaturedPropertiesImage_02 from '../../assets/featuredProperties/featuredProperties_02.jpg';
import FeaturedPropertiesImage_03 from '../../assets/featuredProperties/featuredProperties_03.jpg';
import FeaturedPropertiesImage_04 from '../../assets/featuredProperties/featuredProperties_04.jpg';


const FeaturedProperties = () => {
    return (
        <div className="FeaturedProperties">
           <div className="FeaturedProperties__items">
               <img
                   src={FeaturedPropertiesImage_01}
                   alt="img"
                   className="FeaturedProperties__image"
               />
               <span className="FeaturedProperties__Name">Aparthotel Stare Miasto</span>
               <span className="FeaturedProperties__city">Madrid</span>
               <span className="FeaturedProperties__price">Stating from $120</span>
               <div className="FeaturedProperties__rating">
                   <button type="button">8.9</button>
                   <span>Excellent</span>
               </div>
           </div>
            <div className="FeaturedProperties__items">
                <img
                    src={FeaturedPropertiesImage_02}
                    alt="img"
                    className="FeaturedProperties__image"
                />
                <span className="FeaturedProperties__Name">Aparthotel Stare Miasto</span>
                <span className="FeaturedProperties__city">Madrid</span>
                <span className="FeaturedProperties__price">Stating from $120</span>
                <div className="FeaturedProperties__rating">
                    <button type="button">8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="FeaturedProperties__items">
                <img
                    src={FeaturedPropertiesImage_03}
                    alt="img"
                    className="FeaturedProperties__image"
                />
                <span className="FeaturedProperties__Name">Aparthotel Stare Miasto</span>
                <span className="FeaturedProperties__city">Madrid</span>
                <span className="FeaturedProperties__price">Stating from $120</span>
                <div className="FeaturedProperties__rating">
                    <button type="button">8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="FeaturedProperties__items">
                <img
                    src={FeaturedPropertiesImage_04}
                    alt="img"
                    className="FeaturedProperties__image"
                />
                <span className="FeaturedProperties__Name">Aparthotel Stare Miasto</span>
                <span className="FeaturedProperties__city">Madrid</span>
                <span className="FeaturedProperties__price">Stating from $120</span>
                <div className="FeaturedProperties__rating">
                    <button type="button">8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;
