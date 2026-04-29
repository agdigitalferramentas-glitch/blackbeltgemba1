const FinalCTA = () => {
  return (
    <section className="gradient-cta relative overflow-hidden">
      <div className="container relative py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display font-light text-foreground leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            O Black Belt não é o próximo passo.{" "}
            <span className="text-gold-deep">É o salto definitivo.</span>
          </h2>
          <p className="mt-8 text-soft/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body">
            Poucos profissionais chegam a esse nível. Os que chegam tornam-se
            referência — na empresa, no mercado e na carreira. A turma começa
            em 06 de julho. As vagas são poucas e quem decide agora garante o
            lugar na formação mais avançada do Lean Six Sigma no Brasil.
          </p>

          <div className="mt-10">
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center justify-center rounded-sm px-10 py-4 text-sm md:text-base"
            >
              Quero minha vaga Black Belt →
            </a>
          </div>

          <div className="mt-6 text-xs md:text-sm text-dimmer">
            Início 06/07/2026 · Terças e quintas · 19h30–22h30 · Online ao vivo · Microsoft Teams
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
