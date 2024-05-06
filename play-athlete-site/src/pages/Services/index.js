import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServicesPageSection from "../../components/ServicesPageSection";
import aboutImage1 from '../../images/logo-play-athlete.svg';
import aboutImage2 from '../../images/logo-play-athlete.svg';
import aboutImage3 from '../../images/logo-play-athlete.svg';
import styles from "./Services.module.css";

function Services() {
    const service1 = "Service 1";
    const serviceTitle1 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const serviceText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";

    const service2 = "Service 2";
    const serviceTitle2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const serviceText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";

    const service3 = "Service 3";
    const serviceTitle3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const serviceText3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";


    return (
        <>
            <Header/>
            <ServicesPageSection title={service1} subtitle={serviceTitle1} text={serviceText1} image={aboutImage1} flexDirection="row"></ServicesPageSection>
            <ServicesPageSection title={service2} subtitle={serviceTitle2} text={serviceText2} image={aboutImage2} flexDirection="row-reverse"></ServicesPageSection>
            <ServicesPageSection title={service3} subtitle={serviceTitle3} text={serviceText3} image={aboutImage3} flexDirection="row"></ServicesPageSection>
            <Footer/>
        </>
    );
}

export default Services;