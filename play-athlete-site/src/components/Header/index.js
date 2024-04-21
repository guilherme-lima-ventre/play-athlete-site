import styles from "./Header.module.css";
import MediasNavigation from "../MediasNavigation";
import PagesNavigation from "../PagesNavigation";

function Header() {

    return (
        <section className={styles.header}>
            <img 
                className={styles.header}
                src="../../images/logo-play-athlete.svg" 
                alt="Logo Play Athelte">
            </img>
            <PagesNavigation/>
            <MediasNavigation/>
        </section>
    )
}

export default Header;