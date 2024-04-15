import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() { 
    return (
        <> 
            <header className={styles.header}>
                <img 
                    className={styles.header}
                    src="../../images/logo-play-athlete.svg" 
                    alt="Logo Play Athelte">
                </img>
                <nav className={styles.header}>
                    <Link to="/">HOME</Link>
                    <Link to="/about-us">ABOUT US</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/contact-us">CONTACT US</Link>
                </nav>
                <div className={styles.medias}>
                    <a className={styles.medias} href="https://www.facebook.com/" target="_blank">
                        FB</a>
                    <a className={styles.medias} href="https://www.instagram.com/?hl=pt-br" target="_blank">
                        IG</a>
                    <a className={styles.medias} href="https://www.linkedin.com/" target="_blank">
                        LI</a>
                </div>
            </header>
        </>
    )
}

export default Header;