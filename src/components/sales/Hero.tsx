const stats = [
  { value: "168h", label: "Carga horária total" },
  { value: "+1Bi", label: "Em ganhos gerados" },
  { value: "+30mil", label: "Profissionais formados" },
  { value: "17 anos", label: "Referência nacional" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-grid opacity-[0.5] pointer-events-none" />
      <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Badge */}
        <div className="flex justify-center animate-fade-up">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-soft bg-primary/[0.06] backdrop-blur px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            Gemba Group &amp; Produzzi — O topo do Lean Six Sigma
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-center mt-10 leading-[0.95] animate-fade-up">
          <span className="block text-foreground" style={{ fontSize: "clamp(2.6rem, 6.2vw, 5.6rem)", fontWeight: 700 }}>
            Black Belt
          </span>
          <span className="block text-gold mt-1" style={{ fontSize: "clamp(2.6rem, 6.2vw, 5.6rem)", fontWeight: 800, letterSpacing: "-0.01em" }}>
            Lean Six Sigma
          </span>
          <span className="block text-soft/80 mt-3 italic" style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.9rem)", fontWeight: 400 }}>
            Formação
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-base md:text-lg text-dim leading-relaxed animate-fade-up">
          A certificação de maior prestígio na hierarquia do Lean Six Sigma.
          Domine projetos de alto impacto financeiro, lidere equipes de alta
          performance e torne-se a referência técnica que as maiores
          organizações do Brasil disputam.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#pricing"
            className="btn-gold inline-flex items-center justify-center rounded-md px-8 py-4 text-base"
          >
            Quero atingir o nível Black Belt →
          </a>
          <a
            href="#modules"
            className="text-soft/80 hover:text-gold transition-colors text-sm tracking-wide underline-offset-4 hover:underline decoration-primary/60"
          >
            Ver o que você vai aprender
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="gold-divider mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 text-center">
            {stats.map((s) => (
              <div key={s.label} className="px-2 md:px-4">
                <div className="font-stat text-gold text-[2.4rem] md:text-[3rem] leading-none">{s.value}</div>
                <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.16em] text-dimmer">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="gold-divider mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
