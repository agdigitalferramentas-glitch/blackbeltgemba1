const Footer = () => {
  return (
    <footer className="bg-deep relative">
      <div className="gold-divider" />
      <div className="container py-12 text-center">
        <div className="font-display text-2xl text-foreground tracking-wide">
          Gemba Group <span className="text-gold-deep mx-2">|</span> Produzzi
        </div>
        <p className="mt-4 text-dimmer text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
          © 2026 Gemba Group. Todos os direitos reservados.
          <br />
          Referência Nacional em Lean Six Sigma · Formando a elite da melhoria contínua há mais de 17 anos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
