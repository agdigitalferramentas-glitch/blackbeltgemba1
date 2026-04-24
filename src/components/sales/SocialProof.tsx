import SectionHeader from "./SectionHeader";

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
    <section className="bg-deep relative overflow-hidden">
      <div className="orb orb-gold w-[420px] h-[420px] -top-24 -left-24" />
      <div className="orb orb-steel w-[420px] h-[420px] -bottom-24 -right-24" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader eyebrow="Autoridade comprovada">
          Os números de quem forma <span className="text-gold">a elite do Lean Six Sigma</span> no Brasil.
        </SectionHeader>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 border-t border-l border-gold-soft">
          {numbers.map((n) => (
            <div
              key={n.l}
              className="border-b border-r border-gold-soft p-8 md:p-10 hover:bg-primary/[0.04] transition-colors group text-center"
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
