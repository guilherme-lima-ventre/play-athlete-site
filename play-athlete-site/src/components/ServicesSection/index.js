import styles from "./ServicesSection.module.css";
import serviceImage1 from "../../images/our-service-icon.svg";
import serviceImage2 from "../../images/our-service-icon.svg";
import serviceImage3 from "../../images/our-service-icon.svg";
import ServiceContent from "../ServiceContent";

function ServicesSection({ title, page }) {
    const service1Title = "Business Analysis";
    const service1Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum.";

    const service2Title = "Business Transformation";
    const service2Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum.";

    const service3Title = "Marketing and Sales";
    const service3Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum.";

    return (
        <section className={styles.servicesSection}>
            <h2>{title}</h2>
            <hr/>
            <div>
                <ServiceContent serviceImage={serviceImage1} serviceTitle={service1Title} serviceText={service1Text} page={page}/>
                <ServiceContent serviceImage={serviceImage2} serviceTitle={service2Title} serviceText={service2Text} page={page}/>
                <ServiceContent serviceImage={serviceImage3} serviceTitle={service3Title} serviceText={service3Text} page={page}/>
            </div>
        </section>
    );
}

export default ServicesSection;