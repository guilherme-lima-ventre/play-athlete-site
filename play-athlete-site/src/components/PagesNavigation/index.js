import { Link } from "react-router-dom";
import styles from "./PagesNavigation.module.css";

function PagesNavigation({ flexDirection="row" }) {
    const home = "HOME";
    const services = "SOBRE";
    const aboutUs = "TIME";
    const contactUs = "CONTATO";
    const faq = "FAQ";

    return (
        <nav className={styles.pages} style={{flexDirection}}>
            <Link to="/">{home}</Link>
            <Link to="/sobre-nos">{services}</Link>
            <Link to="/nosso-time">{aboutUs}</Link>
            <Link to="/contact-us">{contactUs}</Link>
            <Link to="/faq">{faq}</Link>
        </nav> 
    );
}

export default PagesNavigation;