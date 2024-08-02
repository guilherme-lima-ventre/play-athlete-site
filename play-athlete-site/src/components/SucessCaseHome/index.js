import leoanrdo from '../../images/leonardo.jpg';
import SucessCase from '../SucessCase';
import styles from "./SucessCaseHome.module.css";

function SucessCaseHome() {
    const person1 = "Leonardo Medeiros";
    const personText3 = "Olá, sou o Leonardo Medeiros";
    const personTitle1 = "Conseguir uma bolsa de estudos nos EUA sempre foi um dos meus maiores sonhos, mas não tinha ideia de como poderia para fazer isso acontecer e por hora até desisti dele, mas depois que conheci a PlayAthlete o sonho se tornou realidade. Eles me ajudaram em cada etapa, desde a preparação dos documentos, acompanhamentos em call e negociações. A equipe é incrível e sempre esteve disponível para me apoiar e tirar qualquer dúvida que tivesse.";
    const personText1 = "Graças à PlayAthlete, estarei ingressando na Emmanuel University. Recomendo demais para quem tem o mesmo sonho. Eles realmente fazem a diferença!";
    const personText2 = "Obrigado, PlayAthlete!";

    return (
        <section className={styles.sucessSection}>
            <div className={styles.title}>
            <h2>Case de SUCESSO</h2>
            <hr/>
            </div>
            <SucessCase title={person1} subtitle4={personText3} subtitle={personTitle1} subtitle2={personText1} subtitle3={personText2}  image={leoanrdo} flexDirection="row"></SucessCase>
        </section>
    );
}

export default SucessCaseHome;