import SectionLabel from "./SectionLabel";

const inclusos: { icon: "check" | "star"; text: string }[] = [
  { icon: "check", text: "8 módulos completos com 168 horas de formação" },
  { icon: "check", text: "Conteúdo exclusivo Black Belt: Testes de Hipóteses, Logística Lean, Kaizen e MSA Atributo" },
  { icon: "check", text: "Aulas ao vivo via Teams — terças e quintas, 19h30–22h30" },
  { icon: "check", text: "1h de mentoria individual durante o curso" },
  { icon: "check", text: "2h de mentoria pós-formação para seu projeto" },
  { icon: "check", text: "Projeto real aplicado na sua empresa, fase a fase" },
  { icon: "check", text: "Banca de avaliação com consultor sênior certificado" },
  { icon: "star", text: "Certificação Internacional — Council for Six Sigma" },
  { icon: "star", text: "Acesso à rede de +30.000 profissionais certificados Gemba Group" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="gradient-pricing relative overflow-hidden">
      <div className="container relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <SectionLabel>Investimento</SectionLabel>
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground">
            O retorno de um Black Belt <span className="text-gold">começa muito antes</span> de terminar o curso.
          </h2>
        </div>

        <div className="mt-16 max-w-[720px] mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 relative"
            style={{
              background: "linear-gradient(180deg, hsl(215 55% 11%), hsl(213 53% 8%))",
              border: "1.5px solid hsl(43 56% 54% / 0.55)",
              boxShadow: "0 30px 80px -20px hsl(43 56% 54% / 0.35), inset 0 1px 0 hsl(43 56% 54% / 0.2)",
            }}
          >
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                Formação Black Belt Lean Six Sigma
              </h3>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full border border-gold-strong bg-primary/[0.08] text-xs uppercase tracking-[0.18em] text-gold">
                🔒 Vagas Limitadas · Início 06/07/2026
              </div>
            </div>

            {/* À vista */}
            <div className="mt-8 rounded-xl p-6 border border-gold-strong bg-primary/[0.05] text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">💰 À vista — Melhor oferta</div>
              <div className="font-stat text-gold text-[3.6rem] md:text-[4.2rem] leading-none mt-2">
                R$ 5.225<span className="text-2xl">,00</span>
              </div>
              <div className="text-sm text-dim mt-2">Você economiza R$ 275,00 pagando à vista (5%)</div>
            </div>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-primary/20" />
              <div className="text-[11px] uppercase tracking-[0.3em] text-dimmer">— ou —</div>
              <div className="flex-1 h-px bg-primary/20" />
            </div>

            {/* Parcelado */}
            <div className="rounded-xl p-6 border border-gold-soft text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-dim">💳 Parcelado no cartão · Sem juros</div>
              <div className="font-stat text-foreground text-[2.8rem] md:text-[3.4rem] leading-none mt-2">
                6× R$ 916<span className="text-xl">,67</span>
              </div>
              <div className="text-sm text-dim mt-2">Total R$ 5.500,00 · sem acréscimos</div>
            </div>

            {/* Inclusos */}
            <ul className="mt-8 space-y-3">
              {inclusos.map((i) => (
                <li key={i.text} className="flex items-start gap-3 text-sm text-soft">
                  <span className={i.icon === "star" ? "text-gold" : "text-secondary-bright"} aria-hidden>
                    {i.icon === "star" ? "★" : "✓"}
                  </span>
                  <span>{i.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="btn-gold mt-8 w-full inline-flex items-center justify-center rounded-md px-8 py-4 text-base"
            >
              Garantir minha vaga Black Belt →
            </a>

            <div className="text-center text-xs text-dimmer mt-5">
              🔒 Ambiente seguro · Início 06/07/2026 · Vagas extremamente limitadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
