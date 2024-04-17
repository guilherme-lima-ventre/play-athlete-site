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
        <footer className={styles.footer}>
            <div className={styles.company}>
                <img
                    src="../../images/logo-play-athlete.svg" alt="Logo Play Athlete"/>
                <p>{companyText}</p>
                <p>{copyrightText}</p>
            </div>

            <div className={styles.pages}>
                <p className={styles.pagesTitle}>{pageLinks}</p>
                <nav>
                    <Link className={styles.pagesName} to="/">
                        <p>{home}</p>
                    </Link>
                    <Link className={styles.pagesName} to="/about-us">
                        <p>{aboutUs}</p>
                    </Link>
                    <Link className={styles.pagesName} to="/services">
                        <p>{services}</p>
                    </Link>
                    <Link className={styles.pagesName} to="/contact-us">
                        <p>{contactUs}</p>
                    </Link>
                </nav>
            </div>

            <div className={styles.subscribe}>
                <p className={styles.subscribeTitle}>{subscribeTitle}</p>
                <p className={styles.subscribeText}>{subscribeText}</p>
                <div className={styles.subscribeInput}>
                    <input className={styles.subscribeInputPlace}
                        placeholder={inputPlaceholder}
                        style={{
                            paddingLeft: '10px'
                            ,outline: 'none'}}
                        />
                    <button 
                        className={styles.subscribeButton}
                        onClick={() => {}}>                
                        <img 
                            className={styles.subscribeImage}
                            src={sendEmail}
                            alt="Enviar email"
                            />
                    </button>
                </div>
                <div className={styles.subscribeMedias}>
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
            </div>
        </footer>
    );
}

export default Footer;
