import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import SectionHeader from "./SectionHeader";

const videos = [
  { id: "wJQeUW8ZQQA", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "cnA_jrJDcRU", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "YhS3Fz6iEYk", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "mCfsnekzJ0o", name: "Depoimento de aluno", role: "Black Belt formado" },
  { id: "VRcPrcZigHM", name: "Depoimento de aluno", role: "Black Belt formado" },
];

const Testimonials = () => {
  const [active, setActive] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openVideo = (id: string, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActive(id);
  };

  const closeVideo = () => {
    setActive(null);
    // Restore focus to the trigger that opened the lightbox
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  // Lock scroll, handle Escape, basic focus trap
  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-focus the close button on open
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeVideo();
      }
      if (e.key === "Tab") {
        // Trap focus on the close button (only focusable element in the modal)
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <section id="testimonials" className="bg-deep relative overflow-hidden">
      <div className="orb orb-gold w-[460px] h-[460px] top-10 right-0" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader
          eyebrow="Quem já viveu essa transformação"
          description="Profissionais que decidiram dominar o Lean Six Sigma no nível Black Belt e hoje lideram projetos de alto impacto nas maiores indústrias do Brasil."
        >
          Histórias reais de quem se tornou <span className="text-gold">referência</span> no mercado.
        </SectionHeader>

        {/* Video grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={(e) => openVideo(v.id, e.currentTarget)}
              className="group card-elevated rounded-sm overflow-hidden border border-gold-soft hover-lift text-left"
              aria-label={`Assistir depoimento de ${v.name}`}
            >
              <div className="relative aspect-video overflow-hidden bg-background-darker">
                {/* Custom thumbnail focused on the person */}
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={`${v.name} — ${v.role}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-[1.4] transition-transform duration-700 group-hover:scale-[1.5]"
                  style={{ objectPosition: "center 35%" }}
                />
                {/* Dark gradient for legibility + premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/30 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-accent/40 blur-lg group-hover:bg-accent/60 transition-colors" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-background shadow-gold-soft transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 ml-0.5 fill-current" />
                    </span>
                  </div>
                </div>

                {/* Caption pinned bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-sm text-foreground font-semibold tracking-wide">
                      {v.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-soft/80 mt-0.5">
                      {v.role}
                    </div>
                  </div>
                  <div className="text-gold text-[10px] font-stat tracking-widest">
                    ★★★★★
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Closing strip */}
        <div className="mt-12">
          <div className="section-divider mb-6" />
          <p className="text-center text-sm md:text-base text-dim max-w-2xl mx-auto">
            Mais de <span className="text-gold font-semibold">30 mil profissionais</span>{" "}
            já passaram pela formação. A próxima história de sucesso pode ser a sua.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background-deep/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-background/80 border border-gold-soft text-foreground flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
            aria-label="Fechar vídeo"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-sm overflow-hidden border border-gold-soft shadow-blue"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Depoimento Black Belt"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
