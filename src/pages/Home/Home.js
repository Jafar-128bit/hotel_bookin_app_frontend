import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <Header/>
            <div className="Home__container">
                <Featured/>
                <h1 className="Home__title">Browse by property type</h1>
                <PropertyList/>
                <h1 className="Home__title">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
