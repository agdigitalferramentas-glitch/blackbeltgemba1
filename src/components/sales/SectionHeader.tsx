import SectionLabel from "./SectionLabel";

type Props = {
  eyebrow: string;
  children: React.ReactNode;
  description?: React.ReactNode;
};

const SectionHeader = ({ eyebrow, children, description }: Props) => (
  <div className="max-w-3xl mx-auto text-center">
    <div className="flex justify-center">
      <SectionLabel centered>{eyebrow}</SectionLabel>
    </div>
    <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
      {children}
    </h2>
    {description && (
      <p className="mt-5 text-base md:text-lg text-dim leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
