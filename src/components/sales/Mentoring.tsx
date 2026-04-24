import SectionHeader from "./SectionHeader";

const cards = [
  {
    badge: "1h · durante",
    title: "Mentoria durante o curso",
    text: "Sessões agendadas no início do treinamento para orientar a aplicação das ferramentas no seu projeto fase a fase.",
  },
  {
    badge: "2h · após",
    title: "Mentoria pós-formação",
    text: "Suporte especializado após o último dia de aula para finalizar e apresentar seu projeto com a profundidade que o Black Belt exige.",
  },
  {
    badge: "✓ · banca",
    title: "Avaliação final com consultor sênior",
    text: "Apresente seu projeto a um especialista certificado, receba feedback técnico aprofundado e conquiste sua certificação Black Belt.",
  },
];

const Mentoring = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="orb orb-gold w-[480px] h-[480px] -bottom-32 -left-32" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader
          eyebrow="Suporte especializado"
          description="Cada aluno tem acesso a mentorias individuais com consultores da Gemba Group — profissionais que atuam ativamente em projetos nas maiores empresas do Brasil. Durante e após o curso, você recebe orientação para garantir que seu projeto evolua com consistência e gere os resultados esperados."
        >
          Consultores que <span className="text-gold">vivem o que ensinam.</span> Não apenas professores.
        </SectionHeader>

        <div className="mt-12 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cards.map((c) => (
            <div key={c.title} className="card-premium hover-lift rounded-xl p-6">
              <div className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-primary-foreground bg-primary px-3 py-1 rounded-full font-semibold">
                {c.badge}
              </div>
              <h3 className="font-display text-xl text-foreground mt-4 mb-2">{c.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoring;
