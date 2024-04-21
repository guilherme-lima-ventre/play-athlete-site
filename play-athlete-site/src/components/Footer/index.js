import styles from "./Footer.module.css";
import logoPlayAthlete from "../../images/logo-play-athlete.svg";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import logoLinkedin from "../../images/twitter-logo.svg";
import PagesNavigation from "../PagesNavigation";
import MediasNavigation from "../MediasNavigation";

function Footer() {
    const companyText = "Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione";
    const copyrightText = "Copyright © 2023";
    const pageLinks = "Páginas";
    const mediasLinks = "Medias";

    return (
        <section className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={logoPlayAthlete} alt="Logo Play Athlete" />
                <p>{companyText}</p>
            </div>

            <div className={styles.footerContent}>
                <h2>{pageLinks}</h2>
                <PagesNavigation flexDirection="column"/>
            </div>

            <div className={styles.footerContent}>
                <h2>{mediasLinks}</h2>
                <MediasNavigation flexDirection="column"/>
                <p>{copyrightText}</p>
            </div>
        </section>
    );
}

export default Footer;
