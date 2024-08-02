import Footer from "../../components/Footer";
import AboutUsPageSection from "../../components/AboutUsPageSection";
import teste7 from '../../images/adriana.png';
import teste77 from '../../images/kainan.png';
import teste8 from '../../images/lucas.png';
import teste88 from '../../images/raphael.png';

function AboutUs() {
    const person1 = "CEO - Raphael Lima";
    const person11 = "CEO";
    const person111 = "Raphael Lima";
    const personTitle1 = "Sua trajetória esportiva começou cedo, nadando desde os três anos de idade. Ele passou por clubes como Juventus e Corinthians, sempre dividindo sua paixão entre natação e futebol.";
    const personText1 = "Atualmente, reside e treina em Miami, onde trabalha como psicólogo. É sócio idealizador da PlayAthlete e proprietário do grupo Raphael Lima Pro, uma empresa especializada em psicologia esportiva. Com quase duas décadas no cenário esportivo, ele combina o melhor do mundo atlético e empresarial, contribuindo para o desenvolvimento de atletas tanto dentro quanto fora das quadras e piscinas mundo a fora. ";
    const personText6 = "Com o tempo, a natação foi onde mais se destacou, e foi nela que ele decidiu focar. Começou a evoluir tarde no esporte, aos 16 anos ganhou sua primeira medalha em campeonato brasileiro de categoria, aos 18 anos, se mudou para os EUA com uma bolsa de estudos, onde teve uma evolução grande, se tornou recordista em ambas universidades que passou. Graduou em Psicologia com ênfase em Business. "

    const person2 = "COO - Adriana Zanetti";
    const person22 = "COO";
    const person222= "Adriana Zanetti";
    const personTitle2 = "Sua vida inteira foi praticamente ligada ao esporte, com a natação competitiva ocupando a maior parte. Foi atleta dos 7 aos 18 anos, participando de campeonatos estaduais e nacionais. Posteriormente, graduou-se em Educação Física e tornou-se treinadora de natação em clubes renomados, como o Esporte Clube Pinheiros.";
    const personText2 = "Atualmente, é mãe de quatro filhos e também cuida de seu sobrinho Raphael, todos envolvidos no esporte. Sua filha Yasmin e seu sobrinho Raphael seguiram na natação e, graças ao esporte, conseguiram estudar em universidades americanas com bolsa de estudos, sendo hoje ambos graduados. Seus outros três filhos, Lucas, Leonardo e Lorenzo, são todos envolvidos com o futebol e natação desde pequenos. Em outras palavras, o esporte é sua paixão e corre nas veias de toda sua família. ";
    const personText5 = "Com a chegada dos filhos, decidiu dedicar mais tempo à família e deixou a carreira de treinadora. No entanto, seu envolvimento com o esporte continuou. Tornou-se sócia proprietária de uma academia de natação, onde desenvolveu todo o processo pedagógico e gerenciou a parte administrativa por 12 anos."

    const person3 = "Associate Partner - Lucas Taba";
    const person33 = "Associate Partner";
    const person333 = "Lucas Taba";
    const personTitle3 = "Desde cedo, o esporte foi fundamental em sua vida, influenciado pelos pais, ambos treinadores de natação. Aos 7 anos, começou a jogar futebol e teve uma carreira de 13 anos como atleta, passando por clubes como Corinthians, Flamengo, Resende, Ituano e Áster Itaqua.";
    const personText3 = "Atualmente, ele estuda administração na FECAP, complementando sua experiência esportiva com conhecimentos acadêmicos. Além de praticar, ele é um entusiasta de competições esportivas, acompanhando diversas modalidades. Sua vida inteira foi marcada pelo envolvimento com o esporte, tanto pessoal quanto profissionalmente.";
    const personText4 = "Sua família sempre esteve envolvida no esporte, com seus irmãos também sendo atletas, o que criou um ambiente de incentivo e paixão pelo esporte.";

    const person4 = "Associate Partner - Kainan Coerin";
    const person44 = "Associate Partner";
    const person444 = "Kainan Coerin";
    const personTitle4 = "Assim como os outros integrantes da PlayAthlte, Kainan Coerin de Jesus é um amante do esporte e ex-atleta de natação profissional, Kainan competiu por 12 anos, tendo passagens por clubes como Corinthians e Santo André, conquistando dezenas de títulos nacionais e internacionais.";
    const personText7 = "Integrante do time nacional, Kainan se destacou tanto no esporte quanto na parte acadêmica, o que lhe rendeu uma bolsa para ser student-athlete na Grand Canyon University em Phoenix, Arizona. Em 2022, graduou-se em Business Management. Atualmente, Kainan também atua como COO de uma start-up inovadora no setor de transporte.";

    return (
        <section>
            <AboutUsPageSection title={person1} title2={person11} title3={person111} subtitle={personTitle1} subtitle2={personText6} text={personText1} image={teste88} flexDirection="row"></AboutUsPageSection>
            <AboutUsPageSection title={person2} title2={person22} title3={person222} subtitle={personTitle2} subtitle2={personText5} text={personText2} image={teste7} flexDirection="row-reverse"></AboutUsPageSection>
            <AboutUsPageSection title={person3} title2={person33} title3={person333}subtitle={personTitle3} subtitle2={personText4} text={personText3} image={teste8} flexDirection="row"></AboutUsPageSection>
            <AboutUsPageSection title={person4} title2={person44} title3={person444} subtitle={personTitle4} subtitle2={personText7} image={teste77} flexDirection="row-reverse"></AboutUsPageSection>
            <Footer/>
        </section>
    );
}

export default AboutUs;