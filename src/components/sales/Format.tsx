import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: "🖥️",
    title: "100% Online ao Vivo",
    text: "Aulas ao vivo via Microsoft Teams. Interação real com o instrutor, perguntas respondidas no momento e aprendizado aplicado na prática.",
  },
  {
    icon: "📅",
    title: "Terças e Quintas — 19h30 às 22h30",
    text: "Início em 06/07/2026. Formato noturno para quem não pode abrir mão da rotina profissional.",
  },
  {
    icon: "📋",
    title: "152h de Aulas + 8h de Coaching",
    text: "152 horas de aulas ao vivo somadas a 8 horas de coaching para certificação dos projetos — a maior carga horária do mercado para um programa Black Belt online ao vivo, com profundidade técnica real.",
  },
  {
    icon: "🎓",
    title: "Certificação Internacional",
    text: "Credenciada pelo Council for Six Sigma. O mesmo padrão exigido por Volvo, Renault e as maiores empresas do mundo.",
  },
  {
    icon: "🛠️",
    title: "Projeto Real com Alto Impacto",
    text: "Você desenvolve um projeto real na sua empresa ao longo de toda a formação, gerando resultados mensuráveis antes mesmo de concluir.",
  },
  {
    icon: "🔁",
    title: "Acesso às Gravações",
    text: "Perdeu algum encontro ao vivo? Sem problemas. Todas as aulas ficam disponíveis na nossa plataforma para você repor e assistir quantas vezes quiser, sem colocar a sua certificação em risco.",
  },
];

const Format = () => {
  return (
    <section className="gradient-format relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />
      <div className="orb orb-steel w-[460px] h-[460px] -top-24 right-0" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader eyebrow="Como funciona">
          Uma formação executiva que <span className="text-gold">respeita o seu tempo.</span>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {items.map((it) => (
            <div
              key={it.title}
              className="card-premium hover-lift rounded-xl p-7"
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
