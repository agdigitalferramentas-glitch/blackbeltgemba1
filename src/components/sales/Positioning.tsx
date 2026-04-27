import SectionHeader from "./SectionHeader";

const cards = [
  {
    icon: "📊",
    title: "Profundidade Técnica",
    text: "O Black Belt aprofunda cada fase do DMAIC com ferramentas complementares que o Green Belt não cobre — incluindo Testes de Hipóteses e MSA para Dados de Atributo.",
  },
  {
    icon: "💰",
    title: "Impacto Financeiro Real",
    text: "A certificação mais exigida quando o assunto é economizar ou gerar milhões para a empresa. O mercado paga salários de elite para quem domina esse nível.",
  },
  {
    icon: "🎯",
    title: "Liderança Estratégica",
    text: "Você não apenas executa projetos — gerencia times, orienta Green Belts e responde diretamente para a alta direção sobre resultados de melhoria contínua.",
  },
];

const Positioning = () => {
  return (
    <section className="relative bg-mid overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />
      <div className="orb orb-steel w-[520px] h-[520px] -top-40 -left-40" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader
          eyebrow="Por que o Black Belt é diferente"
          description="Com 168 horas de formação avançada, você vai além do DMAIC convencional — domina Testes de Hipóteses, DOE, análise de sistemas de medição para dados de atributo, Logística Lean, Kaizen e ferramentas que poucos profissionais no Brasil conhecem na profundidade necessária para gerar savings reais e mensuráveis."
        >
          Não é mais sobre aplicar ferramentas.{" "}
          <span className="text-gold">É sobre gerar milhões em resultado</span>{" "}
          e provar que você vale cada centavo.
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-premium hover-lift rounded-xl p-7 group"
            >
              <div className="text-3xl text-gold mb-4">{c.icon}</div>
              <h3 className="font-display text-xl text-foreground mb-3">{c.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positioning;
