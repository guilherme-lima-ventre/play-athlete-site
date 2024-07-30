import styles from "./ContentSection.module.css";
import planejamento from "../../images/planejamento.png";
import email from "../../images/email.png";
import universidade from "../../images/universidade.png";
import treinador from "../../images/treinador.png";
import candidatura from "../../images/candidatura.png";
import escolha from "../../images/escolha.png";
import apoio from "../../images/apoio-suporte.png";
import ServiceContent from "../ServiceContent";

function ContentSection({ page}) {

    const service1Title = "Planejamento Personalizado";
    const service1Text = "Começamos identificando o histórico e os objetivos do atleta para a criação de um cronograma detalhado para o processo de candidatura, levando em conta a idade do atleta e o tempo disponível.";

    const service2Title = "Criação de Perfil e Email";
    const service2Text = "Criamos email e perfil personalizados com os dados do atleta, aumentando a visibilidade e exposição com treinadores, facilitando o contato e a comunicação direta.";

    const service3Title = "Seleção de Faculdades";
    const service3Text = "Com base no histórico atlético e acadêmico do atleta e seus objetivos, sugerimos faculdades com alta probabilidade de aceitação, recomendando as melhores opções para a aplicação.";

    const service4Title = "Contato com Treinadores Americanos";
    const service4Text = "Facilitamos o contato direto entre o atleta e treinadores americanos, auxiliando na preparação de materiais de apresentação e promovendo a comunicação efetiva para maximizar as chances de recrutamento.";

    const service5Title = "Construção da Candidatura";
    const service5Text = "Quando chega o momento de enviar todos os documentos, vídeos e cartas, nossa equipe especializada colabora com o atleta para garantir que todas as submissões estejam corretas e dentro dos prazos estipulados.";
    
    const service6Title = "Suporte na Escolha da Universidade";
    const service6Text = "Após receber as aprovações, ajudamos o atleta a escolher a universidade que melhor se alinha tanto ao perfil atlético quanto ao perfil acadêmico do atleta. Fornecemos suporte em todos os aspectos cruciais do período pós-aprovação.";
    
    const service7Title = "Acompanhamento Universitário";
    const service7Text = "Durante o período no exterior, oferecemos suporte contínuo para atletas e suas famílias, desde orientações atléticas e acadêmicas até oportunidades de desenvolvimento profissional após a graduação.";

   
    return (
        <section className={styles.servicesSection}>
            <h2>Etapas</h2>
            <hr/>
            <div>
                <ServiceContent serviceImage={planejamento} serviceTitle={service1Title} serviceText={service1Text} page={page}/>
                <ServiceContent serviceImage={email} serviceTitle={service2Title} serviceText={service2Text} page={page}/>
                <ServiceContent serviceImage={universidade} serviceTitle={service3Title} serviceText={service3Text} page={page}/>
                <ServiceContent serviceImage={treinador} serviceTitle={service4Title} serviceText={service4Text} page={page}/>
            </div>
            <div>
                <ServiceContent serviceImage={candidatura} serviceTitle={service5Title} serviceText={service5Text} page={page}/>
                <ServiceContent serviceImage={escolha} serviceTitle={service6Title} serviceText={service6Text} page={page}/>
                <ServiceContent serviceImage={apoio} serviceTitle={service7Title} serviceText={service7Text} page={page}/>
            </div>
        </section>
    );
}

export default ContentSection;