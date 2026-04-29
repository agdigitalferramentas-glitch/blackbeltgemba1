import SectionHeader from "./SectionHeader";

const personas = [
  {
    icon: "🏆",
    title: "O Green Belt que Quer Avançar",
    sub: "Analista Sênior / Coordenador · com certificação GB",
    text: "Já concluiu o Green Belt e sente que chegou na fronteira do seu impacto atual. Quer dominar Testes de Hipóteses, trabalhar com dados de atributo e liderar projetos de escala que justifiquem a ascensão ao próximo nível de carreira.",
    outcome: "Conquistou o Black Belt e assumiu projetos que geraram savings de seis dígitos no primeiro ano.",
  },
  {
    icon: "💡",
    title: "O Líder que Quer Ser Indispensável",
    sub: "Gerente / Supervisor · 35–50 anos",
    text: "Já tem resultados, mas precisa de uma metodologia avançada para conduzir transformações complexas, apresentar resultados financeiros para o board e se tornar referência interna como guardião da excelência operacional.",
    outcome: "Tornou-se o líder que a diretoria aciona quando o problema é sério e o impacto precisa ser financeiramente comprovado.",
  },
  {
    icon: "🎯",
    title: "O Consultor em Formação",
    sub: "Engenheiro / Especialista · busca autonomia",
    text: "Quer sair do modelo CLT e construir uma carreira como consultor independente ou especialista de mercado. Sabe que o Black Belt é o credencial mínimo para cobrar honorários de elite.",
    outcome: "Construiu portfólio de projetos, saiu do CLT e passou a faturar como consultor com autoridade técnica reconhecida.",
  },
];

const Audience = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "hsl(218 55% 14%)" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, hsl(43 56% 54% / 0.12), transparent 60%)" }} />
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader eyebrow="Para quem é esta formação">
          Para quem já sabe que <span className="text-gold">o topo exige mais</span> do que o básico.
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {personas.map((p) => (
            <div key={p.title} className="card-premium hover-lift rounded-xl p-7 flex flex-col">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <div className="text-[11px] uppercase tracking-[0.16em] text-gold-deep mt-1.5 mb-4">{p.sub}</div>
              <p className="text-dim text-sm leading-relaxed">{p.text}</p>
              <div className="mt-5 pt-5 border-t border-gold-soft">
                <div className="flex gap-2 text-sm text-soft">
                  <span className="text-gold mt-0.5">✓</span>
                  <span className="italic">{p.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-xl border border-gold-strong bg-primary/[0.06] p-6 md:p-8">
          <div className="flex items-start gap-3">
            <span className="text-gold text-xl">★</span>
            <div>
              <div className="font-display text-foreground text-lg md:text-xl mb-2">
                O que o Black Belt tem a mais que o Green Belt
              </div>
              <p className="text-dim text-sm md:text-base leading-relaxed">
                Logística Lean · Kaizen · CEP Atributo · MSA Atributo · Testes
                de Hipóteses · Exercícios complementares integrados em cada fase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
