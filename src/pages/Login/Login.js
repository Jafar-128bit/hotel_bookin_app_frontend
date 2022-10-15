import './Login.css';
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const {user, loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleChange = e => {
        setCredentials(prevState => ({...prevState, [e.target.id]: e.target.value}))
    };
    const handleClick = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post(`http://localhost:3300/api/v1/auth/login`, credentials);
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            navigate('/');
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE", payload: error.response.data});
        }
    };
    return (
        <div className="login">
            <div className="login__container">
                <input
                    className="login__input"
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                />
                <input
                    className="login__input"
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                />
                <button
                    className="login__button"
                    onClick={handleClick}
                    disabled={loading}
                >Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};

export default Login;
