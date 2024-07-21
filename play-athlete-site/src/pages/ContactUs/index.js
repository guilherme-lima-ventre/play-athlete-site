import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUsBanner from "../../components/ContactUsBanner";
import styles from "./ContactUs.module.css";

function ContactUs() {
    return (
        <>
            <section className={styles.contactUs}>
            <ContactUsBanner/>   
            </section>
            <Footer/>
        </>
    );
}

export default ContactUs;