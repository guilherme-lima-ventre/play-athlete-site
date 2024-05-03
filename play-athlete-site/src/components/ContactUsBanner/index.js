import styles from "./ContactUsBanner.module.css";
import contactUs from "../../images/contact-us.png";
import logoFacebook from "../../images/facebook-logo.svg";
import logoInstagram from "../../images/instagram-logo.svg";
import logoLinkedin from "../../images/twitter-logo.svg";


function ContactUsBanner() {
    const linkFacebook = "https://www.facebook.com/";
    const linkInstagram = "https://www.instagram.com/?hl=pt-br";
    const linkLinkedin = "https://www.linkedin.com/";

    return (
        <section className={styles.contactUsBanner}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.contact}>
                        <div className={styles.first}>Nos Mande uma mensagem</div>
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
                    <div className={styles.third}>Contate-nos</div>
                        <form>
                            <div className={styles.inputBox}>
                                <label for="">Nome</label>
                                <input type="text" className={styles.input} required/>
                            </div>
                            <div className={styles.inputBox}>
                                <label for="">Email</label>
                                <input type="email" className={styles.input} required/>
                            </div>
                            <div className={styles.inputBox}>
                                <label for="">Celular</label>
                                <input type="tel" className={styles.input} required/>
                            </div>
                            <div className={styles.inputBox}>
                                <label for="">Mensagem</label>
                                <textarea className={styles.input} id="message" cols="30" rows="10" required/>
                            </div>
                            <input type="submit" className={styles.btn} value="Enviar"></input>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsBanner;