import styles from "./ServiceContent.module.css";


function ServiceContent({ serviceImage, serviceTitle, serviceText, page }) {

    return (
        <section className={styles.serviceContent}>
            <img src={serviceImage} alt="Etapas"/>
            <h3>{serviceTitle}</h3>
            <p>{serviceText}</p>
        </section>
    );
    
}

export default ServiceContent;