import NumberCounter from "../NumberCounter";
import styles from "./NumbersSection.module.css";

function NumbersSection() {


    return (
        <section className={styles.numbersSection}>
            <h2>Contato com treinadores de universidades em todos os estados do EUA</h2>
            <hr/>
            <div className={styles.container}>
                <h4>Aproveite nossa reputação e inúmeras conexões em todas as divisões universitárias e estados dos EUA</h4>
                <NumberCounter number={30} increase={1} text={'Esportes'} k={false}/>
                <NumberCounter number={35} increase={1} text={'Treinadores'} k={true}/>
                <NumberCounter number={2} increase={1} text={'Faculdades'} k={false}/>
            </div>
        </section>
    );
}

export default NumbersSection;