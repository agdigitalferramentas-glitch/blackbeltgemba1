import SectionHeader from "./SectionHeader";

const modules = [
  {
    n: "01",
    phase: "Fundamentos",
    title: "Introdução ao Lean & Six Sigma",
    items: [
      "Origem do Lean & Six Sigma",
      "Raciocínio Crítico",
      "O Cliente em Destaque nos Projetos",
      "Introdução aos Conceitos de Variação",
      "O Processo de Melhoria",
      "Os ciclos PDSA e DMAIC",
    ],
    exclusive: false,
  },
  {
    n: "02",
    phase: "Lean Avançado",
    title: "Lean (com conteúdo exclusivo Black Belt)",
    items: [
      "Introdução à Mentalidade Enxuta",
      "Estabilidade Básica",
      "A3 e Hoshin Kanri",
      "MFV e Lean Office",
      "★ Logística Lean (exclusivo BB)",
      "★ Kaizen (exclusivo BB)",
    ],
    exclusive: true,
  },
  {
    n: "03",
    phase: "Gerenciamento de Projetos",
    title: "Conceitos e Ferramentas (PMI)",
    items: [
      "O PMI e as áreas de conhecimento",
      "Integração, Escopo, Cronograma",
      "Custos, Riscos e Stakeholders",
      "Comunicação, Aquisições, Recursos e Qualidade",
    ],
    exclusive: false,
  },
  {
    n: "04",
    phase: "DMAIC — Define",
    title: "Fase Definir",
    items: ["Benchmarking", "VOC — Voz do Cliente", "Diagrama CTQ", "SIPOC e Gráficos"],
    exclusive: false,
  },
  {
    n: "05",
    phase: "DMAIC — Measure",
    title: "Fase Medir (com conteúdo exclusivo Black Belt)",
    items: [
      "Mapa de Processo e Produto",
      "Estratégia de Amostragem",
      "Estatística Básica e Tipos de Dados",
      "Cartas de Controle (CEP) — Dados Contínuos",
      "Análise de Capabilidade",
      "MSA para Dados Contínuos",
      "★ Cartas de Controle — Atributo (exclusivo BB)",
      "★ MSA para Dados de Atributo (exclusivo BB)",
    ],
    exclusive: true,
  },
  {
    n: "06",
    phase: "DMAIC — Analyse",
    title: "Fase Analisar (com conteúdo exclusivo Black Belt)",
    items: [
      "Diagrama Ishikawa",
      "Matriz de Causa e Efeito",
      "Matriz de Esforço e Impacto",
      "5 Porquês",
      "Correlação e Regressão",
      "Componentes de Variação (COV)",
      "DOE — Completo e Fracionado",
      "Tratamento de Ruídos e Otimizador",
      "★ Testes de Hipóteses (exclusivo BB)",
    ],
    exclusive: true,
  },
  {
    n: "07",
    phase: "DMAIC — Improve",
    title: "Fase Melhorar",
    items: [
      "Matriz de Priorização",
      "Plano de ação 5W2H",
      "Plano de Implementação e Lote Piloto",
      "Poka Yoke",
      "FMEA — Análise dos Modos de Falha",
    ],
    exclusive: false,
  },
  {
    n: "08",
    phase: "DMAIC — Control",
    title: "Fase Controlar",
    items: [
      "Gráficos para Comprovação dos Ganhos",
      "Plano de Controle",
      "Procedimento Operacional Padrão",
      "Treinamentos Operacionais",
    ],
    exclusive: false,
  },
];

const Modules = () => {
  return (
    <section id="modules" className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl">
          <SectionLabel>Conteúdo completo — 168 horas</SectionLabel>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
            8 Módulos. <span className="text-gold">O DMAIC na sua forma</span> mais completa e avançada.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {modules.map((m) => (
            <article
              key={m.n}
              className="card-premium hover-lift rounded-xl p-6 relative overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-2 -right-2 font-stat text-[5.5rem] leading-none text-secondary-bright/25 select-none"
              >
                {m.n}
              </span>
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-deep flex items-center gap-2">
                  {m.phase}
                  {m.exclusive && <span className="text-gold">★</span>}
                </div>
                <h3 className="font-display text-lg text-foreground mt-2 mb-4 leading-snug">
                  {m.title}
                </h3>
                <ul className="space-y-1.5 text-xs text-dim">
                  {m.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary/70">▸</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gold-strong bg-primary/[0.06] p-6 md:p-8">
          <div className="flex items-start gap-3">
            <span className="text-gold text-xl">★</span>
            <div>
              <div className="font-display text-foreground text-lg md:text-xl mb-2">
                O que o Black Belt tem a mais que o Green Belt
              </div>
              <p className="text-dim text-sm md:text-base leading-relaxed">
                Logística Lean · Kaizen · CEP Atributo · MSA Atributo · Testes
                de Hipóteses · Exercícios complementares integrados em cada fase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
