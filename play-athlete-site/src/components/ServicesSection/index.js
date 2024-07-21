import styles from "./ServicesSection.module.css";
import NCAA1 from "../../images/NCAA1.png";
import NCAA2 from "../../images/NCAA2.png";
import NCAA3 from "../../images/NCAA3.png";
import NAIA from "../../images/NAIA.png";
import NJCAA from "../../images/NJCAA.png";
import ServiceContent from "../ServiceContent";

function ServicesSection() {
 
   
    return (
        <section className={styles.servicesSection}>
            <h2>Atuamos em todas as ligas Americanas</h2>
            <hr/>
            <div>
                <ServiceContent serviceImage={NCAA1} />
                <ServiceContent serviceImage={NCAA2} />
                <ServiceContent serviceImage={NCAA3} />
                <ServiceContent serviceImage={NAIA} />
                <ServiceContent serviceImage={NJCAA} />
            </div>
        </section>
    );
}

export default ServicesSection;