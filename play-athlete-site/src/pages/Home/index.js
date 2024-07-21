import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import ContentSection from '../../components/ContentSection';
import ServicesSection from '../../components/ServicesSection';
import Partners from '../../components/Partners';
import aboutImage from '../../images/logo-play-athlete.svg';
import achieveImage from '../../images/logo-play-athlete.svg';

function Home() {
    const aboutTitle = "About Company";
    const aboutSubtitle = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";
    const aboutRoute = "nosso-time";

    const achieveTitle = "Our Achievement";
    const achieveSubtitle = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.";
    const achieveText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum. Maecenas tempus tellus a quam pretium laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper.";
    const achieveRoute = "nosso-time";

    const servicesTitle = "Our Services";
    const servicesRoute = "services";

    return (
        <>
            <Banner/>
            {/* About Company */}
            <ContentSection title={aboutTitle} subtitle={aboutSubtitle} text={aboutText} page={aboutRoute} image={aboutImage}/>
            {/* Our Services */}
            <ServicesSection itle={servicesTitle} page={servicesRoute}/>
            {/* Our achieve */}
            <Partners/>
            <Footer/>
        </>
    );
};

export default Home;