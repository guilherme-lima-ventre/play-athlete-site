import styles from "./SucessCase.module.css";

function SucessCase({ title, subtitle, subtitle2, text, image, flexDirection }) {
    const backgroundColor = flexDirection === "row" ? "var(--light-blue-color)" : "var(--white-color)";

    return (
        <section className={styles.section} style={{flexDirection, backgroundColor}}>   

            <img
                className={styles.imagem}
                src={image}
                alt={title}/>
            <div className={styles.text}>
                <h2 className={styles.tiltle}>{title}</h2>
                <hr/>
                <h3>{subtitle}</h3>
                <h3>{subtitle2}</h3>
                <h3>{text}</h3>
            </div>            
        </section>
    );
}

export default SucessCase;