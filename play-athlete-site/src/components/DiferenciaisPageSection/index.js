import styles from "./DiferenciaisPageSection.module.css";


function DiferenciaisPageSection({ diferenciaisImage, diferenciaisTitle, diferenciaisText }) {

    return (
        <section className={styles.diferenciaisContent}>
            <img src={diferenciaisImage} alt="Nosso Diferencial"/>
            <h3>{diferenciaisTitle}</h3>
            <p>{diferenciaisText}</p>
        </section>
    );
}

export default DiferenciaisPageSection;
