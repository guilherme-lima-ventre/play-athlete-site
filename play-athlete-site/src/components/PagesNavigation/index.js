import { Link } from "react-router-dom";
import styles from "./PagesNavigation.module.css";

function PagesNavigation() {
    const home = "HOME";
    const aboutUs = "ABOUT US";
    const services = "SERVICES";
    const contactUs = "CONTACT US";

    return (
        <nav className={styles.pages}>
            <Link to="/">{home}</Link>
            <Link to="/about-us">{aboutUs}</Link>
            <Link to="/services">{services}</Link>
            <Link to="/contact-us">{contactUs}</Link>
        </nav> 
    );
}

export default PagesNavigation;