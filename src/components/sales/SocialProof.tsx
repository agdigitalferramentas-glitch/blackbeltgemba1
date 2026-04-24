import SectionLabel from "./SectionLabel";

const numbers = [
  { v: "+30k", l: "Profissionais capacitados em todo o Brasil" },
  { v: "+1Bi", l: "Em ganhos gerados pelos projetos dos alunos" },
  { v: "+1500", l: "Projetos Lean Six Sigma certificados" },
  { v: "30x", l: "Retorno médio sobre o investimento" },
  { v: "17 anos", l: "Referência nacional em Lean Six Sigma" },
  { v: "+1000", l: "Empresas atendidas em consultoria" },
];

const SocialProof = () => {
  return (
    <section className="bg-deep">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionLabel>Autoridade comprovada</SectionLabel>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
            Os números de quem forma <span className="text-gold">a elite do Lean Six Sigma</span> no Brasil.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 border-t border-l border-gold-soft">
          {numbers.map((n) => (
            <div
              key={n.l}
              className="border-b border-r border-gold-soft p-8 md:p-10 hover:bg-primary/[0.04] transition-colors group"
            >
              <div className="font-stat text-gold text-[3rem] md:text-[4.2rem] leading-none">{n.v}</div>
              <div className="mt-3 text-xs md:text-sm text-dim leading-snug">{n.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
