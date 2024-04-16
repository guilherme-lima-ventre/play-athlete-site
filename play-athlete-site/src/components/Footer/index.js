import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {

    let companyText = "Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione";
    let copyrightText = "Copyright © 2023";
    let pageLinks = "Páginas";
    let subscribeTitle = "Inscreva-se";
    let subscribeText = "Sign up for Alerts, Special Offers, Educationand Updates";

    return (
        <footer className={styles.footer}>
            <div>
                <img
                    src="../../images/logo-play-athlete.svg" alt="Logo Play Athlete"/>
                <p>{companyText}</p>
                <p>{copyrightText}</p>
            </div>

            <div>
                <p>{pageLinks}</p>
                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/about-us">ABOUT US</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/contact-us">CONTACT US</Link>
                </nav>
            </div>

            <div>
                <p>{subscribeTitle}</p>
                <p>{subscribeText}</p>
                <input/>
                <div>
                    <a href="https://www.facebook.com/" target="_blank">
                        FB</a>
                    <a href="https://www.instagram.com/?hl=pt-br" target="_blank">
                        IG</a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        LI</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
