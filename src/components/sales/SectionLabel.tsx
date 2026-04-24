const SectionLabel = ({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) => (
  <div className="inline-flex items-center gap-3 label-eyebrow">
    <span className="h-px w-10 bg-accent/60" />
    {children}
    {centered && <span className="h-px w-10 bg-accent/60" />}
  </div>
);

export default SectionLabel;
