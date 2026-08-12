export default function Formulario() {
  return (
    <div className="min-h-screen bg-[var(--paper)] px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-5xl">

        {/* LOGO */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo-erica.jpg"
            alt="Érica Soares — Psicanálise e Neurociência Aplicada"
            className="w-24 sm:w-28 mix-blend-multiply"
          />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* FOTO */}
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-2 shadow-[0_18px_50px_rgba(65,45,35,0.10)]">
              <img
                src="/erica-formulario.jpg"
                alt="Érica Soares"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
              />
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
              Preparação para sua sessão
            </p>

            <h1 className="font-display text-4xl font-medium leading-tight text-[var(--ink)] sm:text-5xl">
              Formulário Pré-Sessão
              <span className="block italic text-[var(--clay-deep)]">
                de Mapeamento
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)]">
              Antes da nossa sessão, quero conhecer um pouco mais da sua história
              e do momento que você está vivendo.
            </p>

            <p className="mt-4 leading-relaxed text-[var(--ink)]">
              Suas respostas me ajudam a preparar o encontro com mais contexto,
              profundidade e direcionamento.
            </p>

            <div className="mt-7 rounded-2xl border border-[var(--line)] bg-white/60 p-5 text-left shadow-sm">
              <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                ⏱ O preenchimento leva cerca de 10 minutos.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                🔒 Todas as informações são confidenciais.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                ✓ Preencha antes do horário da sua sessão.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://forms.gle/sDSJePVEW9iTjRYNA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--clay)] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--clay-deep)]"
              >
                Preencher formulário
              </a>
            </div>

            <p className="mt-5 text-sm text-[var(--ink-soft)]">
              Ao concluir, você pode fechar a página normalmente.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}