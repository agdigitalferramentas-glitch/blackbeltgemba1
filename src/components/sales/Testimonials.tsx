import SectionLabel from "./SectionLabel";

const videos = [
  { id: "wJQeUW8ZQQA", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "cnA_jrJDcRU", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "YhS3Fz6iEYk", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "mCfsnekzJ0o", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "VRcPrcZigHM", name: "Depoimento de aluno", role: "Black Belt formado" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-deep">
      <div className="container py-16 md:py-20">
        <div className="max-w-3xl">
          <SectionLabel>Quem já viveu essa transformação</SectionLabel>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
            Histórias reais de quem se tornou <span className="text-gold">referência</span> no mercado.
          </h2>
          <p className="mt-5 text-base md:text-lg text-soft/80 leading-relaxed max-w-2xl">
            Profissionais que decidiram dominar o Lean Six Sigma no nível Black Belt e
            hoje lideram projetos de alto impacto nas maiores indústrias do Brasil.
          </p>
        </div>

        {/* Video grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div
              key={v.id}
              className="card-elevated rounded-sm overflow-hidden border border-gold-soft hover-lift group"
            >
              <div className="relative aspect-video bg-background-darker overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={`${v.name} ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-5 border-t border-gold-soft/60 flex items-center justify-between">
                <div>
                  <div className="text-sm text-foreground font-semibold tracking-wide">
                    {v.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-dimmer mt-1">
                    {v.role}
                  </div>
                </div>
                <div className="text-gold text-xs font-stat tracking-widest">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing strip */}
        <div className="mt-14">
          <div className="gold-rule mb-7" />
          <p className="text-center text-sm md:text-base text-dim max-w-2xl mx-auto">
            Mais de <span className="text-gold font-semibold">30 mil profissionais</span>{" "}
            já passaram pela formação. A próxima história de sucesso pode ser a sua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
