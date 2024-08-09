import styles from "./ContactUsBanner.module.css";
import contactUs from "../../images/contactUs.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "@mui/material";

function ContactUsBanner() {

    const linkWhats = `https://wa.me/5511970743961?text=Ol%C3%A1!%20Estou%20interressado%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20PlayAthlete`
    const linkForms = `https://docs.google.com/forms/d/e/1FAIpQLSfqPAfKw4zRafbMQhtJEo3IQmQ5H23IvK_DnSkfWlLe2tfeDA/viewform`
    const linkInsta = `https://www.instagram.com/playathlete/`

    return (
        <section className={styles.section}>
            <h2>Fale Conosco</h2>
            <hr/>
                <div className={styles.container}>
                    <img src={contactUs}/>
                    <div className={styles.text}>
                        <p><EmailIcon/>suporte@playathlete.com.br</p>
                        <Link href={linkWhats}>
                        <p className={styles.textWhats}><WhatsAppIcon />(11)97074-3961</p>
                        </Link>
                        <Link href={linkInsta} target="_blank">
                        <p className={styles.textInsta}><InstagramIcon/>@playathlete</p>
                        </Link>

                    </div>
                </div>
            <hr/>
            <div className={styles.titles}>
                <h2>Se interessou na PlayAthlete?</h2>
                <h3>Conte um pouco mais sobre você clicando <a href={linkForms} target="_blank"> Aqui!</a></h3>
            </div>
        </section>
    );
}

export default ContactUsBanner;