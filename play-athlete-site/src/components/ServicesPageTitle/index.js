import styles from "./ServicesPageTitle.module.css";

function ServicesPageTitle({ title, subtitle, subtitle2, subtitle3, text}) {

    return (
        <section className={styles.section}>
            <div>
                <h2>{title}</h2>
                <hr/>
                <h3>{subtitle}</h3>
                <h3>{subtitle2}</h3>
                <h3>{subtitle3}</h3>
                <p>{text}</p>
            </div>
            
        </section>
    );
}

export default ServicesPageTitle;