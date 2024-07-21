import styles from "./DiferenciaisSection.module.css";
import acompanhamento from "../../images/acompanhamento.png";
import contatos from "../../images/contatos.png";
import experiencia from "../../images/experiencia.png";
import psicologico from "../../images/psicologico.png";
import solucao from "../../images/solucao.png";

import ServiceContent from "../ServiceContent";

function DiferenciasSection({ title, subtitle, text, page, image }) {

    const service1Title = "Experiência Pessoal";
    const service1Text = "Nosso fundador e membros da nossa equipe vivenciaram a experiência de estudar e competir nos Estados Unidos. Essa vivência prática nos permite entender profundamente os desafios e as necessidades dos atletas, oferecendo uma orientação baseada em experiência real.";

    const service2Title = "Solução Completa";
    const service2Text = "Oferecemos suporte em todas as etapas do processo, desde a orientação inicial e a candidatura até a adaptação ao novo ambiente acadêmico e esportivo. Estamos ao lado dos atletas e suas famílias durante toda a jornada.";

    const service3Title = "Rede de Contatos";
    const service3Text = "Temos uma extensa rede de contatos com técnicos e faculdades em todas as ligas americanas, facilitando a conexão dos atletas com oportunidades educacionais e esportivas únicas.";

    const service4Title = "Acompanhamento Contínuo";
    const service4Text = "Após a colocação do atleta em uma faculdade americana, continuamos a oferecer suporte e acompanhamento para garantir que a transição seja suave e bem-sucedida. Estamos presentes para ajudar com qualquer desafio que possa surgir durante a adaptação ao novo ambiente acadêmico e esportivo.";

    const service5Title = "Acompanhamento Psicológico";
    const service5Text = "Incentivamos o desenvolvimento integral dos atletas, promovendo habilidades de vida essenciais, como liderança, resiliência e gestão de tempo. Queremos formar não apenas atletas bem-sucedidos, mas também indivíduos equilibrados e preparados para os desafios da vida.";
    
     
    return (
        <section className={styles.servicesSection}>
            <h2>Nosso Diferencial</h2>
            <hr/>
            <div>
                <ServiceContent serviceImage={experiencia} serviceTitle={service1Title} serviceText={service1Text} page={page}/>
                <ServiceContent serviceImage={solucao} serviceTitle={service2Title} serviceText={service2Text} page={page}/>
                <ServiceContent serviceImage={contatos} serviceTitle={service3Title} serviceText={service3Text} page={page}/>
            </div>
            <div>
                <ServiceContent serviceImage={psicologico} serviceTitle={service5Title} serviceText={service5Text} page={page}/>
                <ServiceContent serviceImage={acompanhamento} serviceTitle={service4Title} serviceText={service4Text} page={page}/>
            </div>
        </section>
    );
}

export default DiferenciasSection;