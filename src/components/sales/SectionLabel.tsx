const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-3 label-eyebrow">
    <span className="h-px w-10 bg-accent/60" />
    {children}
  </div>
);

export default SectionLabel;
