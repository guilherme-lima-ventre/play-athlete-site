import styles from "./Header.module.css";
import MediasNavigation from "../MediasNavigation";
import PagesNavigation from "../PagesNavigation";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className={styles.header}>
            {/* {isSmallScreen ? 
                null : */}
                <Link to="/">
                    <img 
                    className={styles['header-img']}
                    src="../../images/logo-play-athlete.svg" 
                    alt="Logo PlayAthelte">
                    </img>
                </Link>
            {/* }    */}
            <PagesNavigation/>
            {isSmallScreen ? 
                null :
                <MediasNavigation className={styles.medias}/>
            }
        </section>
    )
}

export default Header;