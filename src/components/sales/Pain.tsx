import SectionLabel from "./SectionLabel";

const cards = [
  {
    icon: "🧱",
    title: "Teto de carreira invisível",
    text: "Você já entrega resultados, mas percebe que sem uma formação de nível superior não consegue acessar os cargos de diretoria, gerência sênior ou consultoria de alto valor.",
  },
  {
    icon: "📉",
    title: "Projetos sem profundidade estatística",
    text: "Você aplica metodologias, mas na hora de justificar as causas com dados robustos — Testes de Hipóteses, DOE, análise de variância — falta a ferramenta certa para ter autoridade técnica.",
  },
  {
    icon: "💼",
    title: "Salário estagnado apesar da experiência",
    text: "Você tem anos de mercado, mas não tem o credencial que justifica uma negociação salarial agressiva. O Black Belt é o argumento que nenhum gestor de RH contesta.",
  },
  {
    icon: "🏢",
    title: "Invisível para a alta liderança",
    text: "Você opera bem no nível tático, mas a diretoria não te vê como líder de grandes iniciativas. Falta a autoridade técnica e a linguagem de impacto financeiro que o Black Belt ensina.",
  },
];

const Pain = () => {
  return (
    <section className="bg-darker">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionLabel>Você está nesse ponto?</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground">
            Se você se reconhece em algum desses cenários — <span className="text-gold">é hora de agir.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-premium hover-lift rounded-xl p-7 border-l-2 border-l-primary/70"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{c.icon}</div>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-foreground mb-2">{c.title}</h3>
                  <p className="text-dim text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pain;
