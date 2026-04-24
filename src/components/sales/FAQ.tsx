import { useState } from "react";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "Preciso ter o Green Belt para fazer o Black Belt?",
    a: "O Green Belt Lean Six Sigma é um pré-requisito para a formação Black Belt. Se você ainda não possui a certificação, a Gemba Group também oferece o curso Green Belt — entre em contato para entender o caminho completo.",
  },
  {
    q: "Qual é a diferença real entre o Green Belt e o Black Belt?",
    a: "O Black Belt aprofunda o DMAIC com ferramentas estatísticas avançadas que o Green Belt não cobre: Testes de Hipóteses, Cartas de Controle para Dados de Atributo, MSA para Atributo, Logística Lean e Kaizen estruturado. Além disso, os projetos Black Belt têm escala e impacto financeiro significativamente maiores — e a certificação posiciona o profissional para papéis de liderança estratégica.",
  },
  {
    q: "A certificação é reconhecida internacionalmente?",
    a: "Sim. A certificação é credenciada pelo Council for Six Sigma, reconhecida globalmente. Empresas como Volvo, Renault e centenas de multinacionais exigem ou priorizam profissionais com este certificado em processos seletivos de liderança.",
  },
  {
    q: "Qual é a carga horária e quanto tempo dura o curso?",
    a: "A formação Black Belt tem 168 horas totais de treinamento, com aulas às terças e quintas das 19h30 às 22h30 via Microsoft Teams. A data de início é 06/07/2026. A duração exata em semanas é confirmada no momento da matrícula.",
  },
  {
    q: "Posso parcelar sem juros?",
    a: "Sim. Em até 6x sem juros no cartão de crédito, com parcelas de R$ 916,67 (total R$ 5.500,00). Quem pagar à vista tem 5% de desconto e paga R$ 5.225,00.",
  },
  {
    q: "Como funciona o projeto Black Belt para certificação?",
    a: "Você desenvolve um projeto real de alta complexidade na sua empresa ao longo de toda a formação, aplicando cada fase do DMAIC com profundidade Black Belt. Ao final, apresenta o projeto a um consultor sênior da Gemba Group, recebe avaliação técnica aprofundada e obtém sua certificação.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-darker">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
            Tem dúvidas antes de decidir? <span className="text-gold">A gente responde com clareza.</span>
          </h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`card-premium rounded-xl overflow-hidden transition-colors ${isOpen ? "border-gold-strong" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg text-foreground">{f.q}</span>
                  <span
                    className={`text-gold text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ⌄
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-dim text-sm md:text-base leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
