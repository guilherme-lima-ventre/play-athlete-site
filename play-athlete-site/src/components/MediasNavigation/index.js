import styles from "./MediasNavigation.module.css";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import logoLinkedin from "../../images/twitter-logo.svg";

function MediasNavigation() {
    const linkFacebook = "https://www.facebook.com/";
    const linkInstagram = "https://www.instagram.com/?hl=pt-br";
    const linkLinkedin = "https://www.linkedin.com/";

    return (
        <nav className={styles.medias}>
            <a href={linkFacebook} target="_blank">
                <img src={logoFacebook} alt="Logo Facebook"/>
            </a>
            <a href={linkInstagram} target="_blank">
                <img src={logoInstagram} alt="Logo Instagram"/>
            </a>
            <a href={linkLinkedin} target="_blank">
                <img src={logoLinkedin} alt="Logo Linkedin"/>
            </a>
        </nav>
    );
}

export default MediasNavigation;