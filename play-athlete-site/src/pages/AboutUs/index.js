import Footer from "../../components/Footer";
import AboutUsPageSection from "../../components/AboutUsPageSection";
import teste7 from '../../images/adriana.png';
import teste77 from '../../images/kainan1.png';
import teste8 from '../../images/lucas.png';
import teste88 from '../../images/raphael.png';

function AboutUs() {
    const person1 = "CEO - Raphael Lima";
    const person11 = "CEO";
    const person111 = "Raphael Lima";
    const personTitle1 = "Sua trajetória esportiva começou cedo, nadando desde os três anos de idade. Ele passou por clubes como Juventus e Corinthians, sempre dividindo sua paixão entre natação e futebol.";
    const personText1 = "Atualmente, reside e treina em Miami, onde trabalha como psicólogo. É sócio idealizador da PlayAthlete e proprietário do grupo Raphael Lima Pro, uma empresa especializada em psicologia esportiva. Com quase duas décadas no cenário esportivo, ele combina o melhor do mundo atlético e empresarial, contribuindo para o desenvolvimento de atletas tanto dentro quanto fora das quadras e piscinas mundo a fora. ";
    const personText6 = "Com o tempo, a natação foi onde mais se destacou, e foi nela que ele decidiu focar. Começou a evoluir tarde no esporte, aos 16 anos ganhou sua primeira medalha em campeonato brasileiro de categoria, aos 18 anos, se mudou para os EUA com uma bolsa de estudos, onde teve uma evolução grande, se tornou recordista em ambas universidades que passou. Graduou em Psicologia com ênfase em Business. "

    const person4 = "Associate Partner - Kainan Coerin";
    const person44 = "Associate Partner";
    const person444 = "Kainan Coerin";
    const personTitle4 = "Assim como os outros integrantes da PlayAthlte, Kainan Coerin de Jesus é um amante do esporte e ex-atleta de natação profissional, Kainan competiu por 12 anos, tendo passagens por clubes como Corinthians e Santo André, conquistando dezenas de títulos nacionais e internacionais.";
    const personText7 = "Integrante do time nacional, Kainan se destacou tanto no esporte quanto na parte acadêmica, o que lhe rendeu uma bolsa para ser student-athlete na Grand Canyon University em Phoenix, Arizona. Em 2022, graduou-se em Business Management. Atualmente, Kainan também atua como COO de uma start-up inovadora no setor de transporte.";

    return (
        <section>
            <AboutUsPageSection title={person1} title2={person11} title3={person111} subtitle={personTitle1} subtitle2={personText6} text={personText1} image={teste88} flexDirection="row"></AboutUsPageSection>
            <AboutUsPageSection title={person4} title2={person44} title3={person444} subtitle={personTitle4} subtitle2={personText7} image={teste77} flexDirection="row-reverse"></AboutUsPageSection>
            <Footer/>
        </section>
    );
}

export default AboutUs;