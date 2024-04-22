import styles from "./ServiceContent.module.css";
import arrow from "../../images/arrow-right-green.svg";
import { Link } from "react-router-dom";

function ServiceContent({ serviceImage, serviceTitle, serviceText, page }) {

    return (
        <section className={styles.serviceContent}>
            <img src={serviceImage} alt="Service"/>
            <h3>{serviceTitle}</h3>
            <p>{serviceText}</p>
            <Link to={page}>
                <button>
                    Read More
                    <img
                        id="arrow"
                        src={arrow} 
                        alt="Arrow Right"/>
                </button>
            </Link> 
        </section>
    );
    
}

export default ServiceContent;