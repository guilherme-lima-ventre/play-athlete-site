import styles from "./ContactUsBanner.module.css";
import contactUs from "../../images/contact-us.png";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import logoLinkedin from "../../images/twitter-logo.svg";
import whats from "../../images/whats2.png";



function ContactUsBanner() {
    const linkFacebook = "https://www.facebook.com/";
    const linkInstagram = "https://www.instagram.com/?hl=pt-br";
    const linkLinkedin = "https://www.linkedin.com/";
    const linkWhats = "https://wa.me/16823760929?text=Ol%C3%A1!%20Estou%20interressado%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20PlayAthlete";

    return (
        <section className={styles.contactUsBanner}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.contact}>
                        <div className={styles.first}>Nos mande uma mensagem</div>
                        <img className={styles.imagem1} src={contactUs} />
                        <div className={styles.social}>
                            <ul className={styles.media}>
                                <li><a href={linkFacebook} target="_blank"><img className={styles.imagem2} src={logoFacebook}/></a></li>
                                <li><a href={linkInstagram} target="_blank"><img className={styles.imagem2} src={logoInstagram}/></a></li>
                                <li><a href={linkLinkedin} target="_blank"><img className={styles.imagem2} src={logoLinkedin}/></a></li>
                            </ul>
                        </div>
                    </div>  
                    <div className={styles.submit}>
                        <div className={styles.first}>Contate-nos</div>
                        <div className={styles.contactUsText}>
                            
                        </div>
                        <a href={linkWhats} target="_blank"><img className={styles.imagem3} src={whats}/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsBanner;