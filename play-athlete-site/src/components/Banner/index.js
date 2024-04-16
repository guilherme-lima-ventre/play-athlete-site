import styles from "./Banner.module.css"
import image from "./banner-image.png"

function Banner() {
    return (
        <div>
            <img className={styles.banner} src={image} alt="Profissionais trabalhando"/>
        </div>
    );
}

export default Banner;
