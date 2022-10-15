import './Navbar.css';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="Navbar">
            <div className="Navbar__container">
                <span className="Navbar__logo">JafarBooking</span>
                {user ? user?.username : (<div className="Navbar__navItems">
                    <button className="Navbar__navButton" type="button">
                        Register
                    </button>
                    <button className="Navbar__navButton" type="button">
                        Login
                    </button>
                </div>) }
            </div>
        </div>
    );
};

export default Navbar;
