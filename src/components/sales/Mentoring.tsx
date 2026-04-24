import SectionLabel from "./SectionLabel";

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
    <section className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel>Suporte especializado</SectionLabel>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
              Consultores que <span className="text-gold">vivem o que ensinam.</span> Não apenas professores.
            </h2>
            <p className="mt-6 text-dim text-base md:text-lg leading-relaxed">
              Cada aluno tem acesso a mentorias individuais com consultores
              da Gemba Group — profissionais que atuam ativamente em projetos
              nas maiores empresas do Brasil. Durante e após o curso, você
              recebe orientação para garantir que seu projeto evolua com
              consistência e gere os resultados esperados.
            </p>
          </div>

          <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default Mentoring;
