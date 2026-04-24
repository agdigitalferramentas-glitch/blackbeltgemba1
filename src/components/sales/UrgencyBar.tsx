const UrgencyBar = () => {
  return (
    <div className="w-full bg-blue-band text-primary-foreground border-b border-accent/40">
      <div className="container py-2.5 text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-body">
        <span aria-hidden className="text-accent-bright">●</span>
        <span>Turma Black Belt · Início 06/07 · Vagas extremamente limitadas</span>
        <a href="#pricing" className="text-accent-bright hover:text-foreground transition-colors underline underline-offset-4 decoration-2">
          Inscrições abertas →
        </a>
      </div>
    </div>
  );
};

export default UrgencyBar;
