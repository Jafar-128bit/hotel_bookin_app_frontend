import './Hotel.css';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import hotelPhoto01 from '../../assets/hotelPhoto/hotelPhoto_01.jpg';
import hotelPhoto02 from '../../assets/hotelPhoto/hotelPhoto_02.jpg';
import hotelPhoto03 from '../../assets/hotelPhoto/hotelPhoto_03.jpg';
import hotelPhoto04 from '../../assets/hotelPhoto/hotelPhoto_04.jpg';
import hotelPhoto05 from '../../assets/hotelPhoto/hotelPhoto_05.jpg';
import hotelPhoto06 from '../../assets/hotelPhoto/hotelPhoto_06.jpg';
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import {useState} from "react";

const Hotel = () => {
    const [ slideNumber, setSlideNumber ] = useState(0);
    const [ open, setOpen ] = useState(false);
    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    };
    const handleSlide = (slideDirection = "") => {
        let newSlideNumber;
        if (slideDirection==="prev") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    }
    const photos = [
        {
            src: hotelPhoto01
        },
        {
            src: hotelPhoto02
        },
        {
            src: hotelPhoto03
        },
        {
            src: hotelPhoto04
        },
        {
            src: hotelPhoto05
        },
        {
            src: hotelPhoto06
        },
    ]
    return (
        <div className="Hotel">
            <Navbar/>
            <Header type="list"/>
            <div className="Hotel__container">
                {open && <div className="Hotel__slider">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="Hotel__closeBtn"
                        onClick={() => setOpen(false)}
                    />
                    <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className="Hotel__arrow"
                        onClick={()=>handleSlide("prev")}
                    />
                    <div className="Hotel__sliderWrapper">
                        <img
                            src={photos[slideNumber].src}
                            alt="img"
                            className="Hotel__sliderImage"
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="Hotel__arrow"
                        onClick={()=>handleSlide("next")}
                    />
                </div>}
                <div className="Hotel__wrapper">
                    <button className="Hotel__bookNow" type="button">
                        Reserve or Book Now!
                    </button>
                    <h1 className="Hotel__title">Grand Hotel</h1>
                    <div className="Hotel__address">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="Hotel__distance">
                        Excellent location - 500m from center
                    </span>
                    <span className="Hotel__priceHighLight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="Hotel__image">
                        {photos.map((value, index, array)=>{
                            return <>
                                <div className="Hotel__imageWrapper" key={index}>
                                    <img
                                        src={value.src}
                                        alt={`${index}`}
                                        onClick={() => handleOpen(index)}
                                        className="Hotel__hotelImage"
                                    />
                                </div>
                            </>
                        })}
                    </div>
                    <div className="Hotel__details">
                        <div className="Hotel__detailsText">
                           <h1 className="Hotel__title">Stay in the heart of Krakow</h1>
                            <p className="Hotel__description">
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="Hotel__detailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};

export default Hotel;
