import { useState } from "react";
import SectionHeader from "./SectionHeader";
import PreCheckoutModal from "./PreCheckoutModal";

const CHECKOUT_URL = "https://celcash.celcoin.com.br/landingpage8400068/black-belt/comprar/elite-black-belt-lean-eamp-six-sigma/3";

const inclusos: { icon: "check" | "star"; text: string }[] = [
  { icon: "check", text: "8 módulos completos com 152h de aulas ao vivo" },
  { icon: "check", text: "8h de coaching para certificação dos projetos (2h dentro do cronograma + 3 encontros bimestrais de 2h)" },
  { icon: "check", text: "Conteúdo exclusivo Black Belt: Testes de Hipóteses, Logística Lean, Kaizen e MSA Atributo" },
  { icon: "check", text: "Aulas ao vivo via Teams — terças e quintas, 19h30–22h30" },
  
  { icon: "check", text: "Projeto real aplicado na sua empresa, fase a fase" },
  { icon: "check", text: "Banca de avaliação com consultor sênior certificado" },
  { icon: "star", text: "Certificação Internacional — Council for Six Sigma" },
  { icon: "star", text: "Acesso à rede de +30.000 profissionais certificados Gemba Group" },
];

const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section id="pricing" className="gradient-pricing relative overflow-hidden">
      <div className="orb orb-gold w-[520px] h-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="container relative py-12 md:py-16">
        <SectionHeader eyebrow="Investimento">
          O retorno de um Black Belt começa <span className="text-gold-deep">muito antes</span> de terminar o curso.
        </SectionHeader>

        <div className="mt-12 max-w-[720px] mx-auto">
          <div
            className="rounded-sm p-8 md:p-10 relative card-elevated border-gold-strong"
            style={{ boxShadow: "0 30px 80px -20px hsl(214 45% 28% / 0.5), 0 0 0 1px hsl(38 38% 58% / 0.3)" }}
          >
            <div className="text-center">
              <h3 className="font-display font-medium text-2xl md:text-3xl text-foreground tracking-tight">
                Formação Black Belt Lean Six Sigma
              </h3>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-sm border border-gold-strong bg-accent/[0.08] text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                Vagas Limitadas · Início 06/07/2026
              </div>
            </div>

            {/* À vista — destaque */}
            <div className="mt-8 rounded-sm p-6 border border-gold-strong bg-accent/[0.05] text-center">
              <div className="label-eyebrow text-gold-deep">À vista — Melhor oferta · 5%</div>
              <div className="text-sm text-dimmer mt-3 line-through decoration-1">
                De R$ 8.997,00
              </div>
              <div className="font-stat text-foreground text-[3.6rem] md:text-[4.2rem] leading-none mt-1">
                R$ 5.225<span className="text-2xl text-soft">,00</span>
              </div>
              <div className="text-xs text-dim mt-2">via Pix · 5% de desconto</div>
            </div>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border" />
              <div className="text-[10px] uppercase tracking-[0.3em] text-dimmer">— ou —</div>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Parcelado */}
            <div className="rounded-sm p-6 border border-border text-center">
              <div className="label-eyebrow text-dim">Parcelado no cartão · Sem juros</div>
              <div className="font-stat text-foreground text-[2.8rem] md:text-[3.4rem] leading-none mt-2">
                6× R$ 916<span className="text-xl text-soft">,67</span>
              </div>
              <div className="text-sm text-dim mt-2">Total R$ 5.500,00 · sem acréscimos</div>
            </div>

            <a
              href="https://wa.me/5541987617531?text=Ol%C3%A1!%20Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20a%20Certifica%C3%A7%C3%A3o%20Black%20Belt!"
              className="mt-8 w-full inline-flex items-center justify-center rounded-sm px-8 py-4 text-base bg-[#128C7E] text-white hover:bg-[#0d6b5e] transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.797.372-.275.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.585 5.939L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar com o comercial
            </a>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-gold mt-3 w-full inline-flex items-center justify-center rounded-sm px-8 py-4 text-base"
            >
              Garantir minha vaga Black Belt →
            </button>

            <div className="text-center text-xs text-dimmer mt-5">
              Ambiente seguro · Início 06/07/2026 · Vagas extremamente limitadas
            </div>

            <div className="my-8 h-px bg-border" />

            {/* Inclusos */}
            <ul className="space-y-3">
              {inclusos.map((i) => (
                <li key={i.text} className="flex items-start gap-3 text-sm text-soft">
                  <span className={i.icon === "star" ? "text-gold mt-0.5" : "text-primary-light mt-0.5"} aria-hidden>
                    {i.icon === "star" ? "★" : "✓"}
                  </span>
                  <span>{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <PreCheckoutModal open={modalOpen} onClose={() => setModalOpen(false)} checkoutUrl={CHECKOUT_URL} />
    </>
  );
};

export default Pricing;
