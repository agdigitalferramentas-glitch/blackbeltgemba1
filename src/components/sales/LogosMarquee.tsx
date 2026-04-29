import aeroflex from "@/assets/logos/aeroflex.svg";
import firjan from "@/assets/logos/firjan.svg";
import frisia from "@/assets/logos/frisia.svg";
import kapazi from "@/assets/logos/kapazi.svg";
import nhs from "@/assets/logos/nhs.svg";
import renault from "@/assets/logos/renault.svg";
import riosulense from "@/assets/logos/riosulense.svg";
import senai from "@/assets/logos/senai.svg";
import sicredi from "@/assets/logos/sicredi.svg";
import valmet from "@/assets/logos/valmet.svg";

const logos = [
  { src: renault, alt: "Renault" },
  { src: senai, alt: "SENAI" },
  { src: firjan, alt: "Firjan" },
  { src: sicredi, alt: "Sicredi" },
  { src: valmet, alt: "Valmet" },
  { src: nhs, alt: "NHS" },
  { src: frisia, alt: "Frísia" },
  { src: riosulense, alt: "Riosulense" },
  { src: aeroflex, alt: "Aeroflex" },
  { src: kapazi, alt: "Kapazi" },
];

const LogosMarquee = () => {
  return (
    <section
      aria-label="Empresas que aplicam o método"
      className="relative bg-deep py-10 md:py-12 overflow-hidden border-y border-gold-soft/40"
    >
      <div className="container">
        <h2 className="text-center font-display font-light text-xl md:text-2xl text-soft tracking-tight max-w-3xl mx-auto">
          Método validado e aplicado em empresas de{" "}
          <span className="text-gold">todos os portes e setores</span>.
        </h2>
      </div>

      <div
        className="mt-8 md:mt-10 relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center px-8 md:px-12 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-9 md:h-11 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosMarquee;
