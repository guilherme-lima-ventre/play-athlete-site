import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './FaqContent.module.css';

function FaqContent() {
    const faqs = [
        {
            question: "O QUE É O FAQ?",
            answer: "FAQ significa Perguntas Frequentes. É uma lista de perguntas e respostas comuns sobre um determinado tópico."
        },
        {
            question: "COMO POSSO ENTRAR EM CONTATO COM O SUPORTE?",
            answer: "Você pode entrar em contato com o suporte através do nosso formulário de contato ou pelo e-mail suporte@exemplo.com."
        },
        {
            question: "QUAL É O HORÁRIO DE ATENDIMENTO?",
            answer: "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h."
        },
        {
            question: "COMO POSSO ENTRAR EM CONTATO COM O SUPORTE?",
            answer: "Você pode entrar em contato com o suporte através do nosso formulário de contato ou pelo e-mail suporte@exemplo.com."
        },
        {
            question: "COMO POSSO ENTRAR EM CONTATO COM O SUPORTE?",
            answer: "Você pode entrar em contato com o suporte através do nosso formulário de contato ou pelo e-mail suporte@exemplo.com."
        },
        {
            question: "COMO POSSO ENTRAR EM CONTATO COM O SUPORTE?",
            answer: "Você pode entrar em contato com o suporte através do nosso formulário de contato ou pelo e-mail suporte@exemplo.com."
        },
    ];

    return (
        <Container className={styles.faq}>
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
        </Container>
    );
}

export default FaqContent;