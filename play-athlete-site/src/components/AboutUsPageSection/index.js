import styles from "./AboutUsPageSection.module.css";

function AboutUsPageSection({ title, title2, title3, subtitle, subtitle2, text, image, flexDirection }) {
    const paddingRight = flexDirection === "row-reverse" ? "1rem" : "0";
    const paddingLeft = flexDirection === "row-reverse" ? "0" : "1rem";
    const backgroundColor = flexDirection === "row" ? "var(--white-color)" : "var(--light-blue-color)";

    return (
        <section className={styles.section} style={{flexDirection, backgroundColor}}>
            <img
                className={styles.imagem}
                src={image}
                alt={title}/>
            <div style={{paddingRight, paddingLeft}}>
                <h2 className={styles.tiltle}>{title}</h2>
                <h2 className={styles.title2}>{title2}</h2>
                <h2 className={styles.title3}>{title3}</h2>
                <hr/>
                <h3>{subtitle}</h3>
                <h3>{subtitle2}</h3>
                <h3>{text}</h3>
            </div>            
        </section>
    );
}

export default AboutUsPageSection;