import styles from "./AboutUsPageSection.module.css";

function AboutUsPageSection({ title, subtitle, subtitle2, text, image, flexDirection }) {
    const paddingRight = flexDirection === "row-reverse" ? "10rem" : "0";
    const paddingLeft = flexDirection === "row-reverse" ? "0" : "10rem";
    const backgroundColor = flexDirection === "row" ? "var(--white-color)" : "var(--light-blue-color)";

    return (
        <section className={styles.section} style={{flexDirection, backgroundColor}}>
            <img
                className={styles.imagem}
                src={image}
                alt={title}/>
            <div style={{paddingRight, paddingLeft}}>
                <h2>{title}</h2>
                <hr/>
                <h3>{subtitle}</h3>
                <h3>{subtitle2}</h3>
                <h3>{text}</h3>
            </div>            
        </section>
    );
}

export default AboutUsPageSection;