import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import './List.css';
import {useLocation} from 'react-router-dom'
import {useState} from "react";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
    const location = useLocation();
    console.log(location);
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const {
        data,
        loading,
        error,
        reFetch
    } = useFetch(`http://localhost:3300/api/v1/hotels/qS?city=${destination}&min=${min || 0}&max=${max || 999}`);
    const handleClick = async () => {
        await reFetch();
    };
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
                            <input
                                type="text"
                                placeholder={destination}
                                onChange={event => setDestination(event.target.value)}
                            />
                        </div>
                        <div className="List__items">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(dates[0].startDate,
                                    "dd/MM/yyyy")} to 
                                    ${format(dates[0].endDate,
                                    "dd/MM/yyyy")}`}
                            </span>
                            {openDate && (<DateRange
                                onChange={item => setDates([item.selection])}
                                minDate={new Date()}
                                ranges={dates}
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
                                        className="List__optionInput"
                                        onChange={event => setMin(event.target.value)}
                                    />
                                </div>
                                <div className="List__optionItem">
                                <span className="List__optionText">
                                    Max Price <small>per night</small>
                                </span>
                                    <input
                                        type="number"
                                        className="List__optionInput"
                                        onChange={event => setMax(event.target.value)}
                                    />
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
                        <button
                            type="button"
                            onClick={handleClick}
                        >Search
                        </button>
                    </div>
                    <div className="List__result">
                        {loading ?
                            "Loading Please Wait..." :
                            <>
                                {data.map((value, index, array) => {
                                    return (
                                        <SearchItem
                                            key={index}
                                            data={value}
                                        />
                                    );
                                })}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
