import styles from "./Header.module.css";
import MediasNavigation from "../MediasNavigation";
import PagesNavigation from "../PagesNavigation";
import { Link } from "react-router-dom";

function Header() {

    return (
        <section className={styles.header}>
                <Link to="/">
                <img 
                  className={styles.header}
                  src="../../images/logo-play-athlete.svg" 
                  alt="Logo Play Athelte">
                </img>
                </Link>
            <PagesNavigation/>
            <MediasNavigation/>
        </section>
    )
}

export default Header;