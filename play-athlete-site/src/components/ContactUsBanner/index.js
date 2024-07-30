import styles from "./ContactUsBanner.module.css";
import contactUs from "../../images/contactUs.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "@mui/material";

function ContactUsBanner() {

    const linkWhats = `https://wa.me/16823760929?text=Olá!%20Estou%20interressado%20e%20gostaria%20de%20obter%20mais%20informações%20sobre%20a%20PlayAthlete`
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
                            <p ><WhatsAppIcon />+1 (682) 376-0929</p>
                        </Link>
                        <Link href={linkInsta}>
                            <p><InstagramIcon/>@playathlete</p>
                        </Link>

                    </div>
                </div>
            <hr/>
            <div className={styles.titles}>
                <h2>Se interessou na PlayAthelte?</h2>
                <h3>Conte um pouco mais sobre você clicando <a href={linkForms}> Aqui!</a></h3>
            </div>
        </section>
    );
}

export default ContactUsBanner;