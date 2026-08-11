const WHATSAPP_NUMBER = '5511993954374'
const WHATSAPP_MESSAGE =
  'Olá! Vim pela página da Sessão de Mapeamento de Padrão e gostaria de entender como funciona.'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

const CTA_LABEL = 'Quero agendar minha sessão'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2.5c-5.3 0-9.6 4.3-9.6 9.6 0 1.77.48 3.42 1.31 4.85L2.5 21.5l4.68-1.23a9.55 9.55 0 0 0 4.86 1.33h.01c5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.61-9.6Zm5.62 13.7c-.24.67-1.4 1.3-1.92 1.36-.5.06-1 .1-3.1-.66-2.62-.94-4.31-3.6-4.44-3.77-.13-.17-1.06-1.41-1.06-2.68 0-1.28.67-1.9.9-2.16.24-.26.52-.32.7-.32.17 0 .35 0 .5.01.17.01.4-.06.62.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.16.31-.3.48-.15.17-.31.38-.44.5-.15.14-.3.3-.14.6.17.3.76 1.26 1.63 2.03 1.13 1 2.08 1.32 2.4 1.47.24.11.4.1.55-.06.17-.19.72-.83.92-1.12.19-.28.39-.24.65-.14.27.1 1.68.8 1.97.94.29.15.48.22.55.34.07.12.07.68-.17 1.35Z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5 8 14.5 16 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CtaButton({
  label = CTA_LABEL,
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
  if ((window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: 'AW-16895744964/fXzwCLWI3t0cEMS3wvg-',
    })
  }
}}
      className={`pulse-cta group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--clay)] px-9 py-5 text-lg font-medium text-[var(--paper)] shadow-[0_14px_30px_-10px_rgba(127,57,40,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--clay-deep)] hover:shadow-[0_18px_36px_-8px_rgba(127,57,40,0.6)] active:translate-y-0 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">
      {children}
    </span>
  )
}

function DotList({ items }: { items: Array<string> }) {
  return (
    <ul className="mt-6 space-y-3 text-left">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--clay)]" />
          <span className="text-[1.05rem] leading-relaxed text-[var(--ink)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function CheckList({ items }: { items: Array<string> }) {
  return (
    <ul className="mt-6 space-y-3.5 text-left">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--clay)]" />
          <span className="text-[1.02rem] leading-relaxed text-[var(--ink)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-[var(--line)] py-5 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-[1.1rem] font-medium text-[var(--ink)]">
        {question}
        <span
          aria-hidden="true"
          className="shrink-0 text-xl font-light text-[var(--clay)] transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-3 text-[1.02rem] leading-relaxed text-[var(--ink-soft)]">
        {answer}
      </p>
    </details>
  )
}

const TRIED_ITEMS = [
  'terminar',
  'colocar limites',
  'conversar',
  'se afastar',
  'prometer que nunca mais voltaria',
]

const IMPACT_ITEMS = [
  'duvidar das próprias decisões',
  'perder energia',
  'deixar sonhos para depois',
  'aceitar situações que antes não aceitaria',
  'acreditar que talvez o problema seja você',
]

const OFFER_OUTCOMES = [
  'uma hipótese estruturada dos padrões emocionais predominantes',
  'compreensão dos impactos desses padrões',
  'definição do foco prioritário para começar a mudança',
  'direcionamento dos próximos passos',
]

const FAQ_ITEMS = [
  {
    question: 'Como funciona a sessão?',
    answer:
      'É um encontro individual, online, de 60 a 75 minutos. Conversamos sobre a sua situação e, a partir disso, é feito o mapeamento do padrão emocional que sustenta o comportamento que você quer mudar.',
  },
  {
    question: 'É terapia?',
    answer:
      'Não. A sessão não substitui um processo terapêutico. É uma análise pontual, com foco em identificar padrões — um ponto de partida claro antes de qualquer decisão sobre continuar ou não um acompanhamento.',
  },
  {
    question: 'Preciso contratar o pacote depois?',
    answer:
      'Não. A Sessão de Mapeamento de Padrão é um serviço independente e completo em si mesma. Não há obrigação de contratar qualquer outro processo depois.',
  },
  {
    question: 'Como é feito o pagamento?',
    answer:
      'O pagamento e o agendamento são combinados diretamente pelo WhatsApp, de forma simples e segura, antes da confirmação do horário.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="grain" />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-[var(--line)] px-6 pb-20 pt-16 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[var(--clay)]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[var(--clay)]/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="rise-in mb-8 text-[13px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
            Sessão de Mapeamento de Padrão
          </p>

          <h1
            className="rise-in font-display text-[2.1rem] font-medium leading-[1.2] text-[var(--ink)] sm:text-[2.75rem]"
            style={{ animationDelay: '0.08s' }}
          >
            Você sabe que essa relação não te faz bem…
            <br className="hidden sm:block" /> mas não consegue sair.
          </h1>

          <p
            className="rise-in mx-auto mt-6 max-w-md font-display text-xl italic text-[var(--ink-soft)]"
            style={{ animationDelay: '0.18s' }}
          >
            Ou até se afasta… mas acaba voltando.
          </p>

          <p
            className="rise-in mx-auto mt-5 max-w-sm text-[1.05rem] leading-relaxed text-[var(--ink)]"
            style={{ animationDelay: '0.23s' }}
          >
            Você não precisa continuar tentando resolver isso sozinha.
          </p>

          <div className="rise-in mt-11" style={{ animationDelay: '0.28s' }}>
            <CtaButton />
          </div>
        </div>
      </header>

      <main>
        {/* IDENTIFICAÇÃO */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-xl">
            <div className="space-y-7 text-center font-display text-[1.35rem] leading-relaxed text-[var(--ink)] sm:text-[1.55rem]">
              <p>Você tenta se posicionar… mas cede.</p>
              <p>Aceita coisas que já decidiu que não queria mais.</p>
              <p className="text-[var(--ink-soft)]">
                E, no fundo, fica aquela sensação:
                <br />
                <span className="italic text-[var(--clay-deep)]">
                  "por que eu continuo nisso?"
                </span>
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-md text-center">
              <p className="text-[1.05rem] font-medium text-[var(--ink)]">
                Talvez você já tenha tentado:
              </p>
              <DotList items={TRIED_ITEMS} />
              <p className="mt-8 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
                Mas, em algum momento, acabou repetindo o mesmo ciclo.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--ink)]">
                Não porque você quer.
                <br />
                Mas porque existe um padrão emocional sustentando esse
                comportamento.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACTO */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-[var(--ink)] sm:text-3xl">
              O problema não é apenas essa relação.
            </p>
            <p className="mx-auto mt-5 max-w-sm text-lg leading-relaxed text-[var(--ink-soft)]">
              Aos poucos você começa a:
            </p>

            <div className="mx-auto mt-2 max-w-xs">
              <DotList items={IMPACT_ITEMS} />
            </div>

            <p className="mx-auto mt-9 max-w-sm text-lg font-medium leading-relaxed text-[var(--ink)]">
              Quanto mais esse padrão se repete, mais difícil fica romper
              sozinho.
            </p>
          </div>
        </section>

        {/* VIRADA */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-[var(--ink)] sm:text-3xl">
              Isso não é falta de força.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)]">
              Existe um padrão emocional por trás disso.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)]">
              E enquanto isso não for identificado,
              <br />
              você continua presa nesse ciclo.
            </p>
          </div>
        </section>

        {/* OFERTA */}
        <section
          id="oferta"
          className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-6 py-24 sm:py-28"
        >
          <div className="mx-auto max-w-xl">
            <div className="rounded-[28px] border border-[var(--line)] bg-white/60 p-9 shadow-[0_30px_60px_-30px_rgba(43,36,31,0.25)] sm:p-12">
              <SectionLabel>A sessão</SectionLabel>
              <h2 className="font-display text-[1.9rem] font-medium leading-tight text-[var(--ink)] sm:text-[2.2rem]">
                Sessão de Mapeamento de Padrão
              </h2>
              <p className="mt-4 text-[var(--ink-soft)]">
                Um encontro individual onde você vai entender:
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  'por que você continua voltando ou aceitando',
                  'o que faz você ceder mesmo sabendo',
                  'o que está por trás desse comportamento',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--clay)]" />
                    <span className="text-[1.05rem] leading-relaxed text-[var(--ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 rounded-2xl border border-[var(--clay)]/25 bg-[var(--clay)]/[0.06] p-6 sm:p-7">
                <p className="font-display text-[1.05rem] font-medium text-[var(--ink)]">
                  Ao final da sessão você terá:
                </p>
                <CheckList items={OFFER_OUTCOMES} />
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--line)] pt-7 text-sm text-[var(--ink-soft)]">
                <span>Online · 60–75 minutos</span>
                <span className="font-display text-lg font-semibold text-[var(--ink)]">
                  Investimento: R$147
                </span>
              </div>

              <div className="mt-9">
                <CtaButton className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <figure className="rounded-2xl bg-white/70 p-7 shadow-sm">
                <blockquote className="font-display text-lg italic leading-relaxed text-[var(--ink)]">
                  "Eu já sabia que algo se repetia, mas não conseguia entender
                  o quê. Na sessão ficou muito claro."
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium tracking-wide text-[var(--ink-soft)]">
                  — M., 34 anos
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-white/70 p-7 shadow-sm">
                <blockquote className="font-display text-lg italic leading-relaxed text-[var(--ink)]">
                  "Foi a primeira vez que consegui ver por que eu voltava
                  sempre pro mesmo tipo de relação."
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium tracking-wide text-[var(--ink-soft)]">
                  — A., 29 anos
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-lg text-center">
            <SectionLabel>Quem conduz essa análise</SectionLabel>

            {/* Espaço para foto profissional — coloque o arquivo em /public */}
            <div className="mx-auto mb-7 h-28 w-28 overflow-hidden rounded-full border border-[var(--line)] bg-white/70">
              <img
                src="/erica-soares.jpg"
                alt="Érica Soares, psicanalista"
                className="h-full w-full object-cover"
                loading="lazy"
                width={112}
                height={112}
              />
            </div>

            <p className="font-display text-xl font-medium text-[var(--ink)]">
              Érica Soares
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-[var(--clay)]">
              Psicanalista
            </p>
            <p className="text-sm uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              Especialista em Neurociência do Comportamento Humano
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[var(--ink)]">
              Meu trabalho não é aconselhar.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)]">
              Meu foco é identificar os padrões emocionais que fazem pessoas
              inteligentes continuarem repetindo comportamentos que elas
              mesmas desejam abandonar.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)]">
              A Sessão de Mapeamento de Padrão foi criada para oferecer um
              ponto de partida estruturado antes de qualquer processo de
              mudança.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <SectionLabel>Perguntas frequentes</SectionLabel>
            </div>
            <div className="mt-4">
              {FAQ_ITEMS.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-md text-center">
            <CtaButton />
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-[var(--line)] px-6 py-12">
        <div className="mx-auto max-w-md text-center text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>Atendimento individual, online e confidencial.</p>
          <p className="mt-2 font-display italic text-[15px]">
            Para quem sente que já tentou… mas não consegue sustentar.
          </p>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]/80">
            <span>Atendimento online</span>
            <span aria-hidden="true">·</span>
            <span>Sigilo profissional</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento individual</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
