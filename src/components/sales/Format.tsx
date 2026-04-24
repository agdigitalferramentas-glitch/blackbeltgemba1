import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: "🖥️",
    title: "100% Online ao Vivo",
    text: "Aulas ao vivo via Microsoft Teams. Interação real com o instrutor, perguntas respondidas no momento e aprendizado aplicado na prática.",
  },
  {
    icon: "📅",
    title: "Terças e Quintas — 19h30 às 22h30",
    text: "Início em 06/07/2026. Formato noturno para quem não pode abrir mão da rotina profissional.",
  },
  {
    icon: "📋",
    title: "168 Horas de Formação",
    text: "A maior carga horária do mercado para um programa Black Belt online ao vivo — com profundidade técnica real.",
  },
  {
    icon: "🎓",
    title: "Certificação Internacional",
    text: "Credenciada pelo Council for Six Sigma. O mesmo padrão exigido por Volvo, Renault e as maiores empresas do mundo.",
  },
  {
    icon: "🛠️",
    title: "Projeto Real com Alto Impacto",
    text: "Você desenvolve um projeto real na sua empresa ao longo de toda a formação, gerando resultados mensuráveis antes mesmo de concluir.",
  },
];

const Format = () => {
  return (
    <section className="gradient-format">
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
            Uma formação executiva que <span className="text-gold">respeita o seu tempo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className={`card-premium hover-lift rounded-xl p-7 ${idx === 4 ? "lg:col-start-2" : ""}`}
            >
              <div className="text-3xl text-gold mb-4">{it.icon}</div>
              <h3 className="font-display text-lg text-foreground mb-3">{it.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Format;
