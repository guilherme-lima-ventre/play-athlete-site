import kainan from '../../images/kainanCoerin2.jpg';
import SucessCase from '../SucessCase';
import styles from "./SucessCaseHome.module.css";

function SucessCaseHome() {
    const person1 = "Leo Paes da Silva";
    const personTitle1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const personText1 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <section className={styles.sucessSection}>
            <div className={styles.title}>
            <h2>Case de sucesso</h2>
            <hr/>
            </div>
            <SucessCase title={person1} subtitle={personTitle1} subtitle2={personText1} image={kainan} flexDirection="row"></SucessCase>
        </section>
    );
}

export default SucessCaseHome;