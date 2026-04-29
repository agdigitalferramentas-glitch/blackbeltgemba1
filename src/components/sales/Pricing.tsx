import SectionHeader from "./SectionHeader";

const inclusos: { icon: "check" | "star"; text: string }[] = [
  { icon: "check", text: "8 módulos completos com 168 horas de formação" },
  { icon: "check", text: "Conteúdo exclusivo Black Belt: Testes de Hipóteses, Logística Lean, Kaizen e MSA Atributo" },
  { icon: "check", text: "Aulas ao vivo via Teams — terças e quintas, 19h30–22h30" },
  { icon: "check", text: "1h de mentoria individual durante o curso" },
  
  { icon: "check", text: "Projeto real aplicado na sua empresa, fase a fase" },
  { icon: "check", text: "Banca de avaliação com consultor sênior certificado" },
  { icon: "star", text: "Certificação Internacional — Council for Six Sigma" },
  { icon: "star", text: "Acesso à rede de +30.000 profissionais certificados Gemba Group" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="gradient-pricing relative overflow-hidden">
      <div className="orb orb-gold w-[520px] h-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader eyebrow="Investimento">
          O retorno de um Black Belt começa <span className="text-gold-deep">muito antes</span> de terminar o curso.
        </SectionHeader>

        <div className="mt-12 max-w-[720px] mx-auto">
          <div
            className="rounded-sm p-8 md:p-10 relative card-elevated border-gold-strong"
            style={{ boxShadow: "0 30px 80px -20px hsl(214 45% 28% / 0.5), 0 0 0 1px hsl(38 38% 58% / 0.3)" }}
          >
            <div className="text-center">
              <h3 className="font-display font-medium text-2xl md:text-3xl text-foreground tracking-tight">
                Formação Black Belt Lean Six Sigma
              </h3>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-sm border border-gold-strong bg-accent/[0.08] text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                Vagas Limitadas · Início 06/07/2026
              </div>
            </div>

            {/* À vista — destaque */}
            <div className="mt-8 rounded-sm p-6 border border-gold-strong bg-accent/[0.05] text-center">
              <div className="label-eyebrow text-gold-deep">À vista — Melhor oferta · 5%</div>
              <div className="font-stat text-foreground text-[3.6rem] md:text-[4.2rem] leading-none mt-2">
                R$ 5.225<span className="text-2xl text-soft">,00</span>
              </div>
              
            </div>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border" />
              <div className="text-[10px] uppercase tracking-[0.3em] text-dimmer">— ou —</div>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Parcelado */}
            <div className="rounded-sm p-6 border border-border text-center">
              <div className="label-eyebrow text-dim">Parcelado no cartão · Sem juros</div>
              <div className="font-stat text-foreground text-[2.8rem] md:text-[3.4rem] leading-none mt-2">
                6× R$ 916<span className="text-xl text-soft">,67</span>
              </div>
              <div className="text-sm text-dim mt-2">Total R$ 5.500,00 · sem acréscimos</div>
            </div>

            <a
              href="#"
              className="btn-gold mt-8 w-full inline-flex items-center justify-center rounded-sm px-8 py-4 text-base"
            >
              Garantir minha vaga Black Belt →
            </a>

            <div className="text-center text-xs text-dimmer mt-5">
              Ambiente seguro · Início 06/07/2026 · Vagas extremamente limitadas
            </div>

            <div className="my-8 h-px bg-border" />

            {/* Inclusos */}
            <ul className="space-y-3">
              {inclusos.map((i) => (
                <li key={i.text} className="flex items-start gap-3 text-sm text-soft">
                  <span className={i.icon === "star" ? "text-gold mt-0.5" : "text-primary-light mt-0.5"} aria-hidden>
                    {i.icon === "star" ? "★" : "✓"}
                  </span>
                  <span>{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
