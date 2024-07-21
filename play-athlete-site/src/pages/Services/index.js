import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServicesPageSection from "../../components/ServicesPageSection";
import aboutImage1 from '../../images/mission.png';
import aboutImage2 from '../../images/eye.png';
import aboutImage3 from '../../images/value.png';
import styles from "./Services.module.css";

function Services() {
    const service1 = "Missão";
    const serviceTitle1 = "Nossa missão é transformar a vida de jovens atletas por meio do esporte e da educação de alto nível. Atuando com integridade e humanismo, acreditamos na importância de um desenvolvimento pessoal integral. Focando na pessoa por trás do atleta, cada cliente é tratado de maneira única e objetiva, visando alcançar as melhores oportunidades disponíveis. Nosso objetivo é seguir impactando vidas e transformando sonhos em realidade.";
    const serviceText1 = "";

    const service2 = "Visão";
    const serviceTitle2 = "Nossa visão é ser a principal referência no Brasil em conectar atletas com oportunidades educacionais e esportivas no exterior. Queremos ser reconhecidos pela excelência em assessoria esportiva, proporcionando experiências transformadoras e criando uma comunidade de atletas bem-sucedidos e realizados. Aspiramos a expandir nossa atuação, impactando positivamente a vida de mais atletas e suas famílias, contribuindo para a formação de líderes dentro e fora do êxito esportivo.";
    const serviceText2 = "";

    const service3 = "Valores";
    const serviceTitle3 = "Integridade, Humanismo, Paixão e Transparência.";
    const serviceText3 = "";


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