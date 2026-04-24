const UrgencyBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground">
      <div className="container py-2.5 text-center text-xs sm:text-sm font-semibold tracking-wide flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span aria-hidden>🏆</span>
        <span>Turma Black Belt com início em 06/07 — Vagas extremamente limitadas. Reserve a sua.</span>
        <a href="#pricing" className="underline underline-offset-4 decoration-2 hover:opacity-80 transition-opacity">
          [INSCRIÇÕES ABERTAS]
        </a>
      </div>
    </div>
  );
};

export default UrgencyBar;
