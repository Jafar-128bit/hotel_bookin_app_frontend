import './Navbar.css';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="Navbar__container">
                <span className="Navbar__logo">JafarBooking</span>
                <div className="Navbar__navItems">
                    <button
                        className="Navbar__navButton"
                        type="button"
                    >
                        Register
                    </button>
                    <button
                        className="Navbar__navButton"
                        type="button"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
