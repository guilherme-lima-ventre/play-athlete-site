import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import logoLinkedin from "../../images/twitter-logo.svg";

function Header() {
    const home = "HOME";
    const aboutUs = "ABOUT US";
    const services = "SERVICES";
    const contactUs = "CONTACT US";

    const linkFacebook = "https://www.facebook.com/";
    const linkInstagram = "https://www.instagram.com/?hl=pt-br";
    const linkLinkedin = "https://www.linkedin.com/";

    return (
        <> 
            <header className={styles.header}>
                <img 
                    className={styles.header}
                    src="../../images/logo-play-athlete.svg" 
                    alt="Logo Play Athelte">
                </img>
                <nav className={styles.header}>
                    <Link to="/">{home}</Link>
                    <Link to="/about-us">{aboutUs}</Link>
                    <Link to="/services">{services}</Link>
                    <Link to="/contact-us">{contactUs}</Link>
                </nav>
                <div className={styles.medias}>
                    <a href={linkFacebook} target="_blank">
                        <img 
                            src={logoFacebook} alt="Logo Facebook"/>
                    </a>
                    <a href={linkInstagram} target="_blank">
                        <img 
                            src={logoInstagram} alt="Logo Instagram"/>
                    </a>
                    <a href={linkLinkedin} target="_blank">
                        <img
                            src={logoLinkedin} alt="Logo Linkedin"/>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;