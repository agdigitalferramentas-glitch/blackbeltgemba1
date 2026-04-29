import heroImage from "@/assets/hero-executive.webp";
import logoImage from "@/assets/black-belt-logo-original.webp";

const stats = [
  { value: "160h", label: "152h aulas + 8h coaching" },
  { value: "+1Bi", label: "Em ganhos gerados" },
  { value: "+30mil", label: "Profissionais formados" },
  { value: "17 anos", label: "Referência nacional" },
];

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden hero-photo min-h-[92vh] flex items-center"
      style={{ ["--hero-image" as string]: `url(${heroImage})` }}
    >
      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="container relative pt-20 pb-16 md:pt-24 md:pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            {/* Mobile-only logo above badge */}
            <div className="lg:hidden mb-6 animate-fade-up">
              <img
                src={logoImage}
                alt="Black Belt Lean Six Sigma — certificação oficial Gemba Group"
                width={1622}
                height={507}
                fetchPriority="high"
                decoding="async"
                className="w-1/2 h-auto select-none drop-shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
                draggable={false}
              />
            </div>
            {/* Badge */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2.5 rounded-sm border border-gold-soft bg-background/40 backdrop-blur px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
                </span>
                Gemba Group
              </div>
            </div>

            {/* Headline */}
            <h1 className="mt-7 font-display text-foreground text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.02] tracking-tight font-light animate-fade-up">
              Torne-se o profissional <br className="hidden sm:block" />
              que as maiores indústrias do Brasil <span className="text-gold font-normal">disputam.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base md:text-lg text-soft/85 leading-relaxed font-body animate-fade-up">
              Black Belt Lean Six Sigma — a certificação de maior prestígio na
              hierarquia do Lean Six Sigma. Domine projetos de alto impacto
              financeiro, lidere equipes de alta performance e torne-se a
              referência técnica do seu setor.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up">
              <a
                href="#pricing"
                className="btn-primary inline-flex items-center justify-center rounded-sm px-7 py-3.5"
              >
                Quero atingir o nível Black Belt →
              </a>
              <a
                href="#modules"
                className="text-soft/80 hover:text-gold transition-colors text-sm tracking-wide underline-offset-4 hover:underline decoration-accent/60"
              >
                Ver o que você vai aprender
              </a>
            </div>
          </div>

          {/* RIGHT — official logo lockup */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end animate-fade-up">
            <img
              src={logoImage}
              alt="Black Belt Lean Six Sigma — certificação oficial Gemba Group"
              width={1622}
              height={507}
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-[440px] lg:max-w-none h-auto select-none drop-shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
              draggable={false}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 md:mt-16 max-w-5xl animate-fade-up">
          <div className="steel-rule mb-7" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">
            {stats.map((s) => (
              <div key={s.label} className="px-2 md:px-4">
                <div className="font-stat text-foreground text-[2.5rem] md:text-[3.2rem] leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-dimmer">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="steel-rule mt-7" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
