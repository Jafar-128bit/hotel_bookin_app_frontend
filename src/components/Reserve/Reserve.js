import './Reserve.css';
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import {useContext, useState} from "react";
import {SearchContext} from "../../context/SearchContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Reserve = ({setOpen, hotelId}) => {
    const {data, loading, error} = useFetch(`http://localhost:3300/api/v1/hotels/room/${hotelId}`);
    const navigator = useNavigate();
    const {dates} = useContext(SearchContext);
    const [selectRooms, setSelectRooms] = useState([]);
    const handleSelect = e => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectRooms(checked ? [...selectRooms, value] : selectRooms.filter(item => item !== value))
    };
    const getDateInRang = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        let list = [];
        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return list;
    };
    const allDates = getDateInRang(dates[0].startDate, dates[0].endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => allDates.includes(new Date(date).getTime()));
        return !isFound;
    };
    const handleClick = async () => {
        try {
            await Promise.all(
                selectRooms.map((value => {
                    const res = axios.put(
                        `http://localhost:3300/api/v1/rooms/update/availability/${value}`,
                        {dates: allDates});
                    return res.data;
                }))
            );
            setOpen(false);
            navigator('/');
        } catch (error) {
            return error;
        }
    };
    return (
        <div className="reserve">
            <div className="reserve__container">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="reserve__close"
                    onClick={() => setOpen(false)}
                />
                <span>Select Your rooms:</span>
                {data.map((value, index, array) => (
                    <div className="reserve__item" key={index}>
                        <div className="reserve__itemInfo">
                            <div className="reserve__title">{value.title}</div>
                            <div className="reserve__description">{value.description}</div>
                            <div className="reserve__max">Max People:
                                <b>{value.maxPeople}</b>
                            </div>
                            <div className="reverse__price">{value.price}</div>
                        </div>
                        <div className="reserve__selectRoom">
                            <div className="reserve__room">
                                {value.roomNumbers.map((roomNumber, index, array) => (
                                    <>
                                        <label key={index}>{roomNumber.number}</label>
                                        <input
                                            key={index + 1}
                                            type="checkbox"
                                            value={roomNumber._id}
                                            onChange={handleSelect}
                                            disabled={!isAvailable(roomNumber)}
                                        />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <button className="reserve__button" onClick={handleClick}>
                    Reserve Now!
                </button>
            </div>
        </div>
    );
};

export default Reserve;
