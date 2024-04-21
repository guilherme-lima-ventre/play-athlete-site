import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import logoLinkedin from "../../images/twitter-logo.svg";
import sendEmail from "../../images/send-email.svg";

function Footer() {
    const home = "HOME";
    const aboutUs = "ABOUT US";
    const services = "SERVICES";
    const contactUs = "CONTACT US";

    const linkFacebook = "https://www.facebook.com/";
    const linkInstagram = "https://www.instagram.com/?hl=pt-br";
    const linkLinkedin = "https://www.linkedin.com/";

    const companyText = "Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione";
    const copyrightText = "Copyright © 2023";
    const pageLinks = "Páginas";
    const subscribeTitle = "Inscreva-se";
    const subscribeText = "Sign up for Alerts, Special Offers, Educationand Updates";

    const inputPlaceholder = "Enter your email";

    return (
        <section className={styles.footer}>

        </section>
    );
}

export default Footer;
