import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsPageSection from "../../components/AboutUsPageSection";
import aboutImage1 from '../../images/logo-play-athlete.svg';
import aboutImage2 from '../../images/logo-play-athlete.svg';
import aboutImage3 from '../../images/logo-play-athlete.svg';
import styles from "./AboutUs.module.css";

function AboutUs() {
    const person1 = "Person 1";
    const personTitle1 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const personText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";

    const person2 = "Person 2";
    const personTitle2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const personText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";

    const person3 = "Person 3";
    const personTitle3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const personText3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";


    return (
        <>
            <Header/>
            <AboutUsPageSection title={person1} subtitle={personTitle1} text={personText1} image={aboutImage1} flexDirection="row"></AboutUsPageSection>
            <AboutUsPageSection title={person2} subtitle={personTitle2} text={personText2} image={aboutImage2} flexDirection="row-reverse"></AboutUsPageSection>
            <AboutUsPageSection title={person3} subtitle={personTitle3} text={personText3} image={aboutImage3} flexDirection="row"></AboutUsPageSection>
            <Footer/>
        </>
    );
}

export default AboutUs;