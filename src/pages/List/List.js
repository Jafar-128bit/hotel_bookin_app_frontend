import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import './List.css';
import {useLocation} from 'react-router-dom'
import {useState} from "react";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchItem from "../../components/SearchItem/SearchItem";

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    return (
        <div className="List">
            <Navbar/>
            <Header type="list"/>
            <div className="List__listContainer">
                <div className="List__listWrapper">
                    <div className="List__search">
                        <h1 className="List__title">Search</h1>
                        <div className="List__items">
                            <label>Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="List__items">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate,
                                    "dd/MM/yyyy")} to 
                                    ${format(date[0].endDate,
                                    "dd/MM/yyyy")}`}
                            </span>
                            {openDate && (<DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />)}
                        </div>
                        <div className="List__item">
                            <label>Options</label>
                            <div className="List__options">
                                <div className="List__optionItem">
                                <span className="List__optionText">
                                    Min Price <small>per night</small>
                                </span>
                                    <input
                                        type="number"
                                        className="List__optionInput"/>
                                </div>
                                <div className="List__optionItem">
                                <span className="List__optionText">
                                    Max Price <small>per night</small>
                                </span>
                                    <input
                                        type="number"
                                        className="List__optionInput"/>
                                </div>
                                <div className="List__optionItem">
                                <span className="List__optionText">
                                    Adult
                                </span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="List__optionInput"
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="List__optionItem">
                                <span className="List__optionText">
                                    Children
                                </span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="List__optionInput"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="List__optionItem">
                                <span className="List__optionText">
                                    Room
                                </span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="List__optionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="button">Search</button>
                    </div>
                    <div className="List__result">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
