import styles from "./Partners.module.css";
import logo1 from "../../images/logo_university_1.png";
import logo2 from "../../images/logo_university_2.png";
import logo3 from "../../images/logo_university_3.png";

function Partners() {

    return (
        <section className={styles.partners}>
            <div>
                <img src={logo1} alt="Logo University 1" />
                <img src={logo2} alt="Logo University 2" />
                <img src={logo3} alt="Logo University 3" />
                <img src={logo1} alt="Logo University 1" />
                <img src={logo2} alt="Logo University 2" />
                <img src={logo3} alt="Logo University 3" />
                <img src={logo1} alt="Logo University 1" />
                <img src={logo2} alt="Logo University 2" />
                <img src={logo3} alt="Logo University 3" />
                <img src={logo1} alt="Logo University 1" />
                <img src={logo2} alt="Logo University 2" />
                <img src={logo3} alt="Logo University 3" />
            </div>
        </section>
    );
}

export default Partners;
