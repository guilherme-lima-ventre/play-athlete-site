import styles from "./MediasNavigation.module.css";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";


function MediasNavigation({ flexDirection="row" }) {
    const linkWhats = "https://wa.me/16823760929?text=Olá!%20Estou%20interressado%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20a%20PlayAthlete";
    const linkInstagram = "https://www.instagram.com/playathlete/";

    return (
        <nav className={styles.medias} style={{flexDirection}}>
            <a className={styles.textWhats} href={linkWhats} target="_blank">
                <WhatsAppIcon />
            </a>
            <a className={styles.textInsta} href={linkInstagram} target="_blank">
                <InstagramIcon />
            </a>
            <Link to="/contact-us">
                <EmailIcon />
            </Link>
        </nav>
    );
}

export default MediasNavigation;