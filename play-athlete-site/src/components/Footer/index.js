import styles from "./Footer.module.css";
import logoPlayAthlete from "../../images/logo-play-athlete.svg";
import MediasNavigation from "../MediasNavigation";
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    const companyText = "Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione";
    const contactText = "suporte@playathlete.com.br";
    const copyrightText = "Copyright © 2023";
    const pageLinks = "Contato";
    const mediasLinks = "Medias";

    return (
        <section className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={logoPlayAthlete} alt="Logo PlayAthlete" />
            </div> 

            <div className={styles.footerContent}>
                <h2>{pageLinks}</h2>
                <p>{contactText}<EmailIcon/></p>
            </div>

            <div className={styles.footerContent}>
                <h2>{mediasLinks}</h2>
                <MediasNavigation />
                <p>{copyrightText}</p>
            </div>
        </section>
    );
}

export default Footer;
