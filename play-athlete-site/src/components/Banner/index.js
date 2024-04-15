import styles from "./Banner.module.css"

function Banner() {
    return (
        <div>
            <img className={styles.banner} src="./banner-image.png" alt="Profissionais trabalhando"/>
        </div>
    );
}

export default Banner;
