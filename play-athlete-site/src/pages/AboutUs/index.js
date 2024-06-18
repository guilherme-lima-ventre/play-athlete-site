import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsPageSection from "../../components/AboutUsPageSection";
import socio1 from '../../images/socio1.png';
import socio2 from '../../images/socio2.png';
import socio3 from '../../images/socio3.png';

function AboutUs() {
    const person1 = "CEO - Raphael Lima";
    const personTitle1 = "Sua trajetória esportiva começou cedo, nadando desde os três anos de idade. Ele passou por clubes como Juventus e Corinthians, sempre dividindo sua paixão entre natação e futebol.";
    const personText1 = "Com o tempo, a natação foi onde mais se destacou, e foi nela que ele decidiu focar. Começou a evoluir tarde no esporte, aos 16 anos ganhou sua primeira medalha em campeonato brasileiro de categoria, Aos 18 anos, se mudou para os EUA com uma bolsa de estudos, onde teve uma evolução grande, se tornou recordista em ambas universidades que passou. Graduou em Psicologia com ênfase em Business. Atualmente, reside e treina em Miami, onde trabalha como psicólogo. É sócio idealizador da PlayAthlete e proprietário do grupo Raphael Lima Pro, uma empresa especializada em psicologia esportiva. Com quase duas décadas no cenário esportivo, ele combina o melhor do mundo atlético e empresarial, contribuindo para o desenvolvimento de atletas tanto dentro quanto fora das quadras e piscinas mundo a fora. ";

    const person2 = "COO - Adriana Zanetti";
    const personTitle2 = "Sua vida inteira foi praticamente ligada ao esporte, com a natação competitiva ocupando a maior parte. Foi atleta dos 7 aos 18 anos, participando de campeonatos estaduais e nacionais. Posteriormente, graduou-se em Educação Física e tornou-se treinadora de natação em clubes renomados, como o Esporte Clube Pinheiros.";
    const personText2 = "Com a chegada dos filhos, decidiu dedicar mais tempo à família e deixou a carreira de treinadora. No entanto, seu envolvimento com o esporte continuou. Tornou-se sócia proprietária de uma academia de natação, onde desenvolveu todo o processo pedagógico e gerenciou a parte administrativa por 12 anos. Atualmente, é mãe de quatro filhos e também cuida de seu sobrinho Raphael, todos envolvidos no esporte. Sua filha Yasmin e seu sobrinho Raphael seguiram na natação e, graças ao esporte, conseguiram estudar em universidades americanas com bolsa de estudos, sendo hoje ambos graduados. Seus outros três filhos, Lucas, Leonardo e Lorenzo, são todos envolvidos com o futebol e natação desde pequenos. Em outras palavras, o esporte é sua paixão e corre nas veias de toda sua família.";

    const person3 = "Associate Partner - Lucas Taba";
    const personTitle3 = "Desde cedo, o esporte foi fundamental em sua vida, influenciado pelos pais, ambos treinadores de natação. Aos 7 anos, começou a jogar futebol e teve uma carreira de 13 anos como atleta, passando por clubes como Corinthians, Flamengo, Resende, Ituano e Áster Itaqua.";
    const personText3 = "Sua família sempre esteve envolvida no esporte, com seus irmãos também sendo atletas, o que criou um ambiente de incentivo e paixão pelo esporte. Atualmente, ele estuda administração na FECAP, complementando sua experiência esportiva com conhecimentos acadêmicos.Além de praticar, ele é um entusiasta de competições esportivas, acompanhando diversas modalidades. Sua vida inteira foi marcada pelo envolvimento com o esporte, tanto pessoal quanto profissionalmente..";


    return (
        <>
            <Header/>
            <AboutUsPageSection title={person1} subtitle={personTitle1} text={personText1} image={socio3} flexDirection="row"></AboutUsPageSection>
            <AboutUsPageSection title={person2} subtitle={personTitle2} text={personText2} image={socio2} flexDirection="row-reverse"></AboutUsPageSection>
            <AboutUsPageSection title={person3} subtitle={personTitle3} text={personText3} image={socio1} flexDirection="row"></AboutUsPageSection>
            <Footer/>
        </>
    );
}

export default AboutUs;