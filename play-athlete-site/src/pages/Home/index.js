import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import ContentSection from '../../components/ContentSection';
import ServicesSection from '../../components/ServicesSection';
import Partners from '../../components/Partners';
import aboutImage from '../../images/logo-play-athlete.svg';
import achieveImage from '../../images/logo-play-athlete.svg';
import DiferenciasSection from '../../components/DiferenciaisPage';
import NumbersSection from '../../components/NumbersSection';
import SucessCaseHome from '../../components/SucessCaseHome';

function Home() {

    return (
        <>
            <Banner/>
            <ContentSection />
            <ServicesSection />
            <Partners/>
            <NumbersSection/>
            <DiferenciasSection/>
            <SucessCaseHome />
            <Footer/>
        </>
    );
};

export default Home;