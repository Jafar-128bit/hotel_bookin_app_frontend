import './Header.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DateRange} from "react-date-range";
import {useContext, useState} from "react";
import {format} from 'date-fns';
import {useNavigate} from 'react-router-dom'
import {SearchContext} from "../../context/SearchContext";
import {AuthContext} from "../../context/AuthContext";

const Header = ({type}) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        });
    };
    const {dispatch} = useContext(SearchContext);
    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination, dates, options}});
        navigate("/hotels", {state: {destination, dates, options}});
    }

    return (
        <div className="Header">
            <div className={type === "list" ? "Header__container listMode" : "Header__container"}>
                <div className="Header__list">
                    <div className="Header__listItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="Header__listItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="Header__listItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>
                    <div className="Header__listItem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className="Header__listItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                <>
                    <h1 className="Header__title">
                        A lifetime of discounts? It's Genius.
                    </h1>
                    <p className="Header__description">
                        Get rewarded for your travels - Unlock instant savings of 10% or
                        more with a free JafarBooking account
                    </p>
                    {!user && <button className="Header__button" type="button">Sign In / Register</button>}
                    <div className="Header__Search">
                        <div className="Header__SearchItem">
                            <FontAwesomeIcon icon={faBed} className="Header__Icon"/>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="Header__SearchInput"
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="Header__SearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="Header__Icon"/>
                            <span className="Header__SearchText" onClick={() => setOpenDate(!openDate)}>
                            {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="Header__reactDate"
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="Header__SearchItem">
                            <FontAwesomeIcon icon={faPerson} className="Header__Icon"/>
                            <span
                                className="Header__SearchText"
                                onClick={() => setOpenOptions(!openOptions)}
                            >
                            {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                        </span>
                            {openOptions && <div className="Header__options">
                                <div className="Header__optionItem">
                                    <span className="Header__optionText">Adult</span>
                                    <div className="Header__optionCounter">
                                        <button
                                            className="Header__optionCounterButton"
                                            type="button"
                                            disabled={options.adult <= 1}
                                            onClick={() => handleOption("adult", "d")}
                                        >-
                                        </button>
                                        <span className="Header__optionCounterNumber">{options.adult}</span>
                                        <button
                                            className="Header__optionCounterButton"
                                            type="button"
                                            onClick={() => handleOption("adult", "i")}
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="Header__optionItem">
                                    <span className="Header__optionText">Children</span>
                                    <div className="Header__optionCounter">
                                        <button
                                            className="Header__optionCounterButton"
                                            type="button"
                                            disabled={options.children <= 0}
                                            onClick={() => handleOption("children", "d")}
                                        >-
                                        </button>
                                        <span className="Header__optionCounterNumber">{options.children}</span>
                                        <button
                                            className="Header__optionCounterButton"
                                            type="button"
                                            onClick={() => handleOption("children", "i")}
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="Header__optionItem">
                                    <span className="Header__optionText">Room</span>
                                    <div className="Header__optionCounter">
                                        <button
                                            className="Header__optionCounterButton"
                                            type="button"
                                            disabled={options.room <= 1}
                                            onClick={() => handleOption("room", "d")}
                                        >-
                                        </button>
                                        <span className="Header__optionCounterNumber">{options.room}</span>
                                        <button
                                            className="Header__optionCounterButton"
                                            type="button"
                                            onClick={() => handleOption("room", "i")}
                                        >+
                                        </button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="Header__SearchItem">
                            <button
                                className="Header__button"
                                type="button"
                                onClick={handleSearch}
                            >Search
                            </button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Header;
