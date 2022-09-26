import './MailList.css';

const MailList = () => {
    return (
        <div className="MailList">
            <h1 className="MailList__title">Save time, save money</h1>
            <span className="MailList__description">
                Sign up and we'll send the best deals to you
            </span>
            <div className="MailList__InputContainer">
                <input type="text" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
