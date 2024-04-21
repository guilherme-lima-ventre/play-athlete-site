import styles from "./Banner.module.css"
import arrow from "../../images/arrow-right.svg"

function Banner() {
    const bannerTitle = "Establish, Grow and Scale the Business with us";
    const bannerText = "Lorem ipsum dolor sit amet, consectetur adipiscing eliteLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit.";
    const buttonText = "Learn More";

    return (
        <section className={styles.banner}>
            <h1>{bannerTitle}</h1>
            <p>{bannerText}</p>
            <button>
                {buttonText}
                <img src={arrow} alt="Arrow Right"></img>
            </button>
        </section>
    );
}

export default Banner;
