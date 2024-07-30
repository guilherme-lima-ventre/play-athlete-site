import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './FaqContent.module.css';

function FaqContent() {
    const faqs = [
        {
            question: "COMO FUNCIONA EM RELAÇÃO A ALIMENTAÇÃO E MORADIA?",
            answer: "A maioria das universidades nos Estados Unidos oferece opções de alimentação e moradia dentro do campus para estudantes-atletas.Os custos e a disponibilidade podem variar, mas muitas bolsas de estudo cobrem total ou parcialmente essas despesas."
        },
        {
            question: "QUANTO TEMPO DEMORA A GRADUAÇÃO?",
            answer: "O tempo para completar a graduação nos Estados Unidos geralmente é de quatro anos para cursos de bacharelado. No entanto, pode variar dependendo do curso escolhido e da carga horária do estudante. Nossos consultores ajudam a planejar um cronograma acadêmico que equilibre os compromissos esportivos e acadêmicos."
        },
        {
            question: "QUAIS ESPORTES VOCÊS TRABALHAM?",
            answer: "Trabalhamos com uma ampla gama de esportes, incluindo natação, futebol, basquete, atletismo, vôlei, tênis, golfe, polo aquático, entre outros. Se você pratica um esporte diferente, entre em contato conosco para verificar a possibilidade de suporte."
        },
        {
            question: "EU POSSO TRABALHAR ENQUANTO ESTIVER LÁ?",
            answer: "Sim, estudantes internacionais com visto F-1 podem trabalhar no campus até 20 horas por semana durante o período letivo e até 40 horas por semana durante as férias. Existem também opções de estágios e treinamento prático (CPT e OPT) que podem permitir trabalho fora do campus em determinadas circunstâncias."
        },
        {
            question: "O QUE A BOLSA DE ESTUDOS ENGLOBA?",
            answer: "As bolsas de estudo esportivas podem cobrir parcial ou integral as despesas com mensalidades, moradia, alimentação, livros, materiais acadêmicos e materiais esportivos. A cobertura exata varia dependendo da universidade e do programa esportivo que você se encaixa. Trabalharemos com você para identificar as melhores oportunidades disponíveis."
        },
        {
            question: "COMO FUNCIONA O PROCESSO?",
            answer: "Nosso processo começa com uma avaliação detalhada do seu perfil esportivo e acadêmico. Em seguida, ajudamos na preparação de vídeos de desempenho, cartas de recomendação e outros materiais necessários. Depois, entramos em contato com os treinadores de universidades para encontrar as melhores oportunidades de bolsas de estudo para você. Acompanhamos você em todas as etapas, desde a inscrição até a adaptação na universidade."
        },
        {
            question: "QUAL IDADE POSSO INICIAR O PROGRAMA COM A PLAYATHLETE?",
            answer: "Atletas podem começar a preparação com a PlayAthlete a partir dos 14 anos. No entanto, a maioria dos candidatos tem entre 16 e 18 anos, quando estão se preparando para terminar o ensino médio e iniciar a universidade. A vantagem de começar o trabalho mais cedo é que podemos planejar cada passo, desde desempenho escolar no ensino médio até um aumento de performance no esporte."
        },
        {
            question: "AINDA NÃO SEI QUAL CURSO FAZER, ISSO PODE ATRAPALHAR?",
            answer: "Não, isso não será um problema. Muitas universidades nos Estados Unidos permitem que os estudantes iniciem seus estudos sem declarar um curso específico, oferecendo tempo para explorar diferentes áreas antes de escolher uma especialização. Nossos consultores também podem ajudar a orientá-lo na escolha de um curso que combine com seus interesses e habilidades."
        },
        {
            question: "QUAL O NÍVEL DE INGLÊS NECESSÁRIO?",
            answer: "O nível de inglês necessário varia de acordo com a universidade, mas geralmente é exigido um bom desempenho em testes como SAT, DUOLINGUO e/ou TOEFL. Oferecemos orientação e recursos para ajudar nossos atletas a atingir o nível de inglês necessário para se candidatar às universidades. "
        },
    ];

    return (
        <section className={styles.faq}>
            <h2>Perguntas Frequentes</h2>
            <hr/>
            {faqs.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h3>{faq.question}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4>{faq.answer}</h4>
                    </AccordionDetails>
                </Accordion>
            ))}
        </section>
    );
}

export default FaqContent;