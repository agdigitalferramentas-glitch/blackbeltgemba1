import { useEffect, useState, FormEvent } from "react";
import { X } from "lucide-react";

const WEBHOOK_URL = "https://automacao.gembagroup.com.br/webhook/29448797-7eed-40a1-923a-70785ac16ab9";

interface PreCheckoutModalProps {
  open: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

const formatPhoneBR = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const PreCheckoutModal = ({ open, onClose, checkoutUrl }: PreCheckoutModalProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const nomeTrim = nome.trim();
    const emailTrim = email.trim();
    const telDigits = telefone.replace(/\D/g, "");

    if (!nomeTrim || nomeTrim.length < 2) {
      setError("Informe seu nome completo.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      setError("Informe um e-mail válido.");
      return;
    }
    if (telDigits.length < 10 || telDigits.length > 11) {
      setError("Informe um telefone válido com DDD.");
      return;
    }

    setSubmitting(true);

    // Dispara webhook (fire-and-forget, sem bloquear redirect)
    try {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programa_elite: "Black Belt TD",
          nome: nomeTrim,
          telefone: telefone,
          email: emailTrim,
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // ignore
    }

    window.location.href = checkoutUrl;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="precheckout-title"
    >
      <div
        className="relative w-full max-w-md bg-background border border-gold-strong rounded-sm shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 p-2 rounded-sm text-soft hover:text-foreground hover:bg-accent/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="label-eyebrow text-gold-deep">Último passo</div>
          <h3
            id="precheckout-title"
            className="font-display font-medium text-2xl text-foreground tracking-tight mt-2"
          >
            Garanta sua vaga Black Belt
          </h3>
          <p className="text-sm text-dim mt-2">
            Preencha seus dados para continuar com sua inscrição em ambiente seguro.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="pc-nome" className="block text-xs uppercase tracking-wider text-soft mb-1.5">
              Nome completo
            </label>
            <input
              id="pc-nome"
              type="text"
              required
              autoComplete="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              maxLength={120}
              className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-gold-strong focus:outline-none focus:ring-2 focus:ring-gold/30 text-foreground transition-colors"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="pc-email" className="block text-xs uppercase tracking-wider text-soft mb-1.5">
              E-mail
            </label>
            <input
              id="pc-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={160}
              className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-gold-strong focus:outline-none focus:ring-2 focus:ring-gold/30 text-foreground transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="pc-tel" className="block text-xs uppercase tracking-wider text-soft mb-1.5">
              Telefone (WhatsApp)
            </label>
            <input
              id="pc-tel"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              value={telefone}
              onChange={(e) => setTelefone(formatPhoneBR(e.target.value))}
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-gold-strong focus:outline-none focus:ring-2 focus:ring-gold/30 text-foreground transition-colors"
            />
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-sm px-3 py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-gold w-full inline-flex items-center justify-center rounded-sm px-8 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? "Redirecionando..." : "Continuar para o Checkout →"}
          </button>

          <p className="text-center text-[11px] text-dimmer mt-2">
            🔒 Ambiente seguro · Seus dados estão protegidos
          </p>
        </form>
      </div>
    </div>
  );
};

export default PreCheckoutModal;
