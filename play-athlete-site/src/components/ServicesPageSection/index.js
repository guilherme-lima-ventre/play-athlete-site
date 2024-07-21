import styles from "./ServicesPageSection.module.css";

function ServicesPageSection({ title, subtitle, text, image, flexDirection }) {
    const paddingRight = flexDirection === "row-reverse" ? "2rem" : "0";
    const paddingLeft = flexDirection === "row-reverse" ? "0" : "2rem";
    const backgroundColor = flexDirection === "row" ? "var(--light-blue-color)": "var(--white-color)";

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

export default ServicesPageSection;