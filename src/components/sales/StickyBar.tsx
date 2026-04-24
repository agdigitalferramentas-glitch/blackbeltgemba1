import { useEffect, useState } from "react";

const StickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-500 ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <div
        className="border-t border-gold-strong"
        style={{
          background: "hsl(215 55% 8% / 0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-between">
          <div className="text-xs sm:text-sm text-soft text-center sm:text-left">
            <span className="font-display text-gold mr-2">Black Belt Lean Six Sigma</span>
            <span className="text-dim">· Início 06/07 · 6× R$ 916,67 sem juros ou R$ 5.225 à vista</span>
          </div>
          <a
            href="#pricing"
            className="btn-gold inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm whitespace-nowrap"
          >
            Garantir vaga →
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
