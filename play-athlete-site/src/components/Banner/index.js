import styles from "./Banner.module.css"
import arrow from "../../images/arrow-right.svg"
import { Link } from "react-router-dom";

function Banner() {
    const bannerTitle = "PlayAthlete";
    const bannerText = "A PlayAthlete é uma empresa dedicada a transformar o futuro de jovens atletas, conectando-os com faculdades americanas, possibilitando que atletas conquistem bolsas de estudo para jogarem e estudarem nos Estados Unidos. O nosso objetivo é tornar o seu sonho realidade.";
    const buttonText = "Saiba mais";

    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1>{bannerTitle}</h1>
                <p>{bannerText}</p>
            </div>
            <Link to="/sobre-nos" style={{color: 'white'}}>
                <button>
                    {buttonText}
                    <img src={arrow} alt="Arrow Right"></img>
                </button>
            </Link>
        </section>
    );
}

export default Banner;
