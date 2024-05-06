import styles from "./AboutUsPageSection.module.css";

function AboutUsPageSection({ title, subtitle, text, image, flexDirection }) {
    const paddingRight = flexDirection === "row-reverse" ? "10rem" : "0";
    const paddingLeft = flexDirection === "row-reverse" ? "0" : "10rem";
    const backgroundColor = flexDirection === "row" ? "var(--white-color)" : "var(--light-blue-color)";

    return (
        <section className={styles.section} style={{flexDirection, backgroundColor}}>
            <img
                src={image}
                alt={title}/>
            <div style={{paddingRight, paddingLeft}}>
                <h2>{title}</h2>
                <hr/>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </div>            
        </section>
    );
}

export default AboutUsPageSection;