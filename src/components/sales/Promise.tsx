import SectionLabel from "./SectionLabel";

const Promise = () => {
  return (
    <section className="gradient-mid">
      <div className="container py-16 md:py-20">
        <div className="max-w-3xl">
          <SectionLabel>O que muda quando você se torna Black Belt</SectionLabel>
          <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.1] mt-5 text-foreground tracking-tight">
            Você para de resolver problemas.{" "}
            <span className="text-soft font-normal">Começa a eliminar as causas que nenhum outro profissional encontra.</span>
          </h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative">
          <div
            aria-hidden
            className="absolute -top-10 left-0 font-display text-accent/30 text-[7rem] md:text-[10rem] leading-none select-none"
          >
            “
          </div>
          <blockquote className="card-elevated rounded-sm p-8 md:p-12 relative border-l-2 border-l-accent">
            <p className="font-body text-soft text-lg md:text-xl leading-relaxed">
              O Black Belt não é um profissional que sabe mais ferramentas.
              É um profissional que pensa diferente — com dados, estrutura e
              visão de impacto financeiro. Após a formação, você conduz projetos
              complexos que geram economia real e transformam o negócio de dentro
              para fora. Esse é o padrão que as melhores empresas do Brasil e do
              mundo procuram e pagam para ter.
            </p>
            <div className="gold-rule mt-8" />
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Promise;
