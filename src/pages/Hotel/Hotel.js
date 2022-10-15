import './Hotel.css';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
// import hotelPhoto01 from '../../assets/hotelPhoto/hotelPhoto_01.jpg';
// import hotelPhoto02 from '../../assets/hotelPhoto/hotelPhoto_02.jpg';
// import hotelPhoto03 from '../../assets/hotelPhoto/hotelPhoto_03.jpg';
// import hotelPhoto04 from '../../assets/hotelPhoto/hotelPhoto_04.jpg';
// import hotelPhoto05 from '../../assets/hotelPhoto/hotelPhoto_05.jpg';
// import hotelPhoto06 from '../../assets/hotelPhoto/hotelPhoto_06.jpg';
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import {useContext, useState} from "react";
import useFetch from "../../hooks/useFetch";
import {useLocation, useNavigate} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";
import Reserve from "../../components/Reserve/Reserve";

const Hotel = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const id = location.pathname.split('/')[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    };
    const handleSlide = (slideDirection = "") => {
        let newSlideNumber;
        if (slideDirection === "prev") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };
    // const photos = [
    //     {
    //         src: hotelPhoto01
    //     },
    //     {
    //         src: hotelPhoto02
    //     },
    //     {
    //         src: hotelPhoto03
    //     },
    //     {
    //         src: hotelPhoto04
    //     },
    //     {
    //         src: hotelPhoto05
    //     },
    //     {
    //         src: hotelPhoto06
    //     },
    // ];
    const {data, loading, error} = useFetch(`http://localhost:3300/api/v1/hotels/get/${id}`);
    const { dates, options } = useContext(SearchContext);
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
        return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);
    //One line function 😎
    const handleClick = () => user ? setOpenModal(!openModal) : navigate('/login');
    return (
        <div className="Hotel">
            <Navbar/>
            <Header type="list"/>
            {loading ? "Loading please wait.." : <div className="Hotel__container">
                {open && <div className="Hotel__slider">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="Hotel__closeBtn"
                        onClick={() => setOpen(false)}
                    />
                    <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className="Hotel__arrow"
                        onClick={() => handleSlide("prev")}
                    />
                    <div className="Hotel__sliderWrapper">
                        <img
                            src={data.photos[slideNumber]}
                            alt="img"
                            className="Hotel__sliderImage"
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="Hotel__arrow"
                        onClick={() => handleSlide("next")}
                    />
                </div>}
                <div className="Hotel__wrapper">
                    <button className="Hotel__bookNow" type="button" onClick={handleClick}>
                        Reserve or Book Now!
                    </button>
                    <h1 className="Hotel__title">{data?.name}</h1>
                    <div className="Hotel__address">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data?.address}</span>
                    </div>
                    <span className="Hotel__distance">
                        Excellent location - {data?.distance}m from center
                    </span>
                    <span className="Hotel__priceHighLight">
                        Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="Hotel__image">
                        {data.photos?.map((value, index, array) => {
                            return <>
                                <div className="Hotel__imageWrapper" key={index}>
                                    <img
                                        src={value}
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
                            <h1 className="Hotel__title">{data?.title}</h1>
                            <p className="Hotel__description">{data?.description}</p>
                        </div>
                        <div className="Hotel__detailsPrice">
                            <h1>Perfect for a {days}-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>${data?.cheapestPrice * days * options?.room}</b> ({days} nights)
                            </h2>
                            <button onClick={handleClick} type="button">Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
        </div>
    );
};

export default Hotel;
