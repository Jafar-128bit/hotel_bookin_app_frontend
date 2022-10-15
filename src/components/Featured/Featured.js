import './Featured.css';
import featuredPhoto_01 from '../../assets/featured_photos/featured_01.webp';
import featuredPhoto_02 from '../../assets/featured_photos/featured_02.webp';
import featuredPhoto_03 from '../../assets/featured_photos/featured_03.webp';
import useFetch from "../../hooks/useFetch";

const Featured = () => {
    const {
        data,
        loading,
    } = useFetch('http://localhost:3300/api/v1/hotels/getAll/countByCity?cities=Mumbai,Dehli,Bengalore');
    return (
        <div className="Featured">
            {loading ? ("Loading please wait") : (<>
                <div className="Feature__items">
                    <img className="Featured__image" src={featuredPhoto_01} alt=""/>
                    <div className="Featured__titles">
                        <h1>Mumbai</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="Feature__items">
                    <img className="Featured__image" src={featuredPhoto_02} alt=""/>
                    <div className="Featured__titles">
                        <h1>Dehli</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="Feature__items">
                    <img className="Featured__image" src={featuredPhoto_03} alt=""/>
                    <div className="Featured__titles">
                        <h1>Bengalore</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>)}
        </div>
    );
};

export default Featured;
