import styles from "./ContentSection.module.css";
import arrow from "../../images/arrow-right-green.svg";
import { Link } from "react-router-dom";

function ContentSection({ title, subtitle, text, page, image }) {

    return (
        <section className={styles.contentSection}>
            <img
                src={image}
                alt={title}/>
            <div>
                <h2>{title}</h2>
                <hr/>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <Link to={page}>
                    <button>
                        Read More
                        <img
                            id="arrow"
                            src={arrow} 
                            alt="Arrow Right"/>
                    </button>
                </Link>   
            </div>            
        </section>
    );
}

export default ContentSection;