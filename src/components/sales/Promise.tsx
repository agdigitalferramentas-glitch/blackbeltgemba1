import SectionLabel from "./SectionLabel";

const Promise = () => {
  return (
    <section className="gradient-promise">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <SectionLabel>O que muda quando você se torna Black Belt</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground">
            Você para de resolver problemas.{" "}
            <span className="text-gold">Começa a eliminar as causas</span> que nenhum outro profissional encontra.
          </h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="absolute -top-8 -left-2 md:-left-8 font-display text-gold/30 text-[8rem] md:text-[11rem] leading-none select-none">
            “
          </div>
          <blockquote className="card-premium rounded-2xl p-8 md:p-12 relative">
            <p className="font-display italic text-soft text-xl md:text-2xl leading-relaxed">
              O Black Belt não é um profissional que sabe mais ferramentas.
              É um profissional que pensa diferente — com dados, estrutura e
              visão de impacto financeiro. Após a formação, você conduz projetos
              complexos que geram economia real e transformam o negócio de dentro
              para fora. Esse é o padrão que as melhores empresas do Brasil e do
              mundo procuram e pagam para ter.
            </p>
            <div className="gold-divider mt-8" />
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Promise;
