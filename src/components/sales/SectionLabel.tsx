const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold-deep">
    <span className="h-px w-8 bg-primary/60" />
    {children}
  </div>
);

export default SectionLabel;
