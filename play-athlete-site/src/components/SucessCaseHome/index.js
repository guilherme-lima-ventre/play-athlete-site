import kainan from '../../images/kainanCoerin2.jpg';
import SucessCase from '../SucessCase';
import styles from "./SucessCaseHome.module.css";

function SucessCaseHome() {
    const person1 = "Kainan Coerin";
    const personTitle1 = "Sua trajetória esportiva começou cedo, nadando desde os três anos de idade. Ele passou por clubes como Juventus e Corinthians, sempre dividindo sua paixão entre natação e futebol.";
    const personText1 = "Atualmente, reside e treina em Miami, onde trabalha como psicólogo. É sócio idealizador da PlayAthlete e proprietário do grupo Raphael Lima Pro, uma empresa especializada em psicologia esportiva. Com quase duas décadas no cenário esportivo, ele combina o melhor do mundo atlético e empresarial, contribuindo para o desenvolvimento de atletas tanto dentro quanto fora das quadras e piscinas mundo a fora. ";

    return (
        <section className={styles.sucessSection}>
            <div className={styles.title}>
            <h2 >Case de sucesso</h2>
            <hr/>
            </div>
            <SucessCase title={person1} subtitle={personTitle1} subtitle2={personText1} image={kainan} flexDirection="row"></SucessCase>
        </section>
    );
}

export default SucessCaseHome;