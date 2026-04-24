import heroImage from "@/assets/hero-executive.jpg";
import logoImage from "@/assets/black-belt-logo.png";

const stats = [
  { value: "168h", label: "Carga horária total" },
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

      <div className="container relative pt-24 pb-20 md:pt-28 md:pb-28 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-sm border border-gold-soft bg-background/40 backdrop-blur px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
              </span>
              Gemba Group &amp; Produzzi
            </div>
          </div>

          {/* Logo lockup — uses screen blend so the dark navy bg melts into the photo */}
          <div className="mt-8 animate-fade-up -ml-2">
            <img
              src={logoImage}
              alt="Black Belt Lean Six Sigma — certificação oficial"
              width={1268}
              height={400}
              className="w-full max-w-[620px] h-auto select-none"
              style={{ mixBlendMode: "screen" }}
              draggable={false}
            />
          </div>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-base md:text-lg text-soft/85 leading-relaxed font-body animate-fade-up">
            A certificação de maior prestígio na hierarquia do Lean Six Sigma.
            Domine projetos de alto impacto financeiro, lidere equipes de alta
            performance e torne-se a referência técnica que as maiores
            organizações do Brasil disputam.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up">
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

        {/* Stats */}
        <div className="mt-20 max-w-5xl animate-fade-up">
          <div className="steel-rule mb-8" />
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
          <div className="steel-rule mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
