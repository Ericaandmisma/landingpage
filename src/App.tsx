import type { ReactNode } from 'react'

const WHATSAPP_NUMBER = '5511993954374'

const WHATSAPP_MESSAGE =
  'Olá! Vim pela página da Sessão de Mapeamento de Padrão e gostaria de verificar os horários disponíveis para agendar.'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

const CTA_LABEL = 'Quero verificar os horários'

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
      className={`pulse-cta inline-flex min-h-[48px] w-auto max-w-full items-center justify-center gap-2.5 rounded-full bg-[var(--clay)] px-6 py-3 text-center text-[0.9rem] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(127,57,40,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--clay-deep)] sm:px-8 sm:py-3.5 sm:text-[0.95rem] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--clay)] sm:text-[11px]">
      {children}
    </span>
  )
}

const OBJECTIONS = [
  {
    title: '“Mas eu nem sei se quero terminar.”',
    text: 'Você não precisa chegar com essa decisão tomada. A sessão não existe para dizer se você deve ficar ou terminar. Nós localizamos o que acontece quando sua decisão começa a mudar e definimos onde agir primeiro.',
  },
  {
    title: '“E se eu não quiser continuar depois?”',
    text: 'Não existe obrigação de continuidade. A Sessão de Mapeamento é uma entrega independente e você recebe seu Mapa de Padrão Emocional mesmo que decida não seguir em nenhum outro processo.',
  },
  {
    title: '“Uma sessão vai resolver tudo?”',
    text: 'Não. A proposta não é prometer resolver em 90 minutos algo que pode ter se repetido por anos. O objetivo é sair do “eu volto atrás de novo” para localizar onde isso começa e definir o primeiro ponto de ação.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="grain" />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-[var(--line)] px-5 pb-9 pt-3 sm:px-6 sm:pb-14 sm:pt-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--clay)]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="rise-in mb-2 flex justify-center sm:mb-6">
            <img
              src="/logo-erica.jpg"
              alt="Érica Soares — Psicanálise e Neurociência Aplicada"
              className="w-[72px] mix-blend-multiply sm:w-28"
            />
          </div>

          <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="rise-in mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">
                Sessão de Mapeamento de Padrão
              </p>

              <h1
                className="rise-in font-display text-[1.8rem] font-medium leading-[1.07] text-[var(--ink)] sm:text-[2.65rem] lg:text-[3rem]"
                style={{ animationDelay: '0.05s' }}
              >
                Você sabe o que não quer mais aceitar.

                <span className="mt-2 block italic text-[var(--clay-deep)]">
                  O difícil é sustentar essa decisão quando existe envolvimento
                  emocional.
                </span>
              </h1>

              {/* FOTO MOBILE */}
              <div
                className="rise-in relative mx-auto mt-5 w-full max-w-[320px] lg:hidden"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="overflow-hidden rounded-[20px] border border-[var(--line)] bg-white/50 p-1.5 shadow-[0_15px_36px_rgba(65,45,35,0.10)]">
                  <img
                    src="/hero-mapeamento.jpg"
                    alt="Mulher refletindo ao olhar uma mensagem no celular"
                    className="h-[225px] w-full rounded-[15px] object-cover object-center"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <p
                className="rise-in mx-auto mt-5 max-w-xl text-[0.94rem] leading-[1.6] text-[var(--ink-soft)] lg:mx-0"
                style={{ animationDelay: '0.13s' }}
              >
                Você se afasta e volta. Coloca um limite e flexibiliza. Decide
                que dessa vez será diferente e, em algum momento, aquilo que
                parecia claro começa a perder força.
              </p>

              <p
                className="rise-in mx-auto mt-4 max-w-xl font-display text-[1.06rem] font-medium leading-[1.48] text-[var(--ink)] lg:mx-0"
                style={{ animationDelay: '0.17s' }}
              >
                Na sessão, nós localizamos onde essa mudança começa e definimos
                onde agir primeiro para
                <span className="italic text-[var(--clay-deep)]">
                  {' '}
                  começar a quebrar a repetição.
                </span>
              </p>

              {/* OFERTA HERO */}
              <div
                className="rise-in mx-auto mt-5 max-w-md border-y border-[var(--line)] py-4 text-left lg:mx-0"
                style={{ animationDelay: '0.2s' }}
              >
                <p className="text-[0.88rem] font-medium leading-relaxed text-[var(--ink)]">
                  Sessão individual de até 90 minutos
                  <span className="text-[var(--ink-soft)]">
                    {' '}
                    + Mapa de Padrão Emocional personalizado
                  </span>
                </p>

                <div className="mt-3 flex items-end justify-between gap-5">
  <p className="text-[0.82rem] text-[var(--ink-soft)]">
    Investimento ·{' '}
    <strong className="text-[1.05rem] font-semibold text-[var(--ink)]">
      R$ 147
    </strong>
  </p>

  <p className="max-w-[130px] text-right text-[10px] leading-relaxed text-[var(--ink-soft)]">
    Online · individual · até 90 min
  </p>
</div>
              </div>

              <div
                className="rise-in mt-5"
                style={{ animationDelay: '0.24s' }}
              >
                <CtaButton />

                <p className="mx-auto mt-3 max-w-sm text-[10px] leading-relaxed text-[var(--ink-soft)] lg:mx-0">
                  Você será direcionada ao WhatsApp para consultar os horários disponíveis. O agendamento só é confirmado após sua escolha.
                </p>
              </div>
            </div>

            {/* FOTO DESKTOP */}
            <div className="relative mx-auto hidden w-full max-w-[390px] lg:block">
              <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-white/50 p-1.5 shadow-[0_18px_50px_rgba(65,45,35,0.11)]">
                <img
                  src="/hero-mapeamento.jpg"
                  alt="Mulher refletindo ao olhar uma mensagem no celular"
                  className="aspect-[4/5] w-full rounded-[19px] object-cover object-center"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* MECANISMO */}
        <section className="px-5 py-9 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-[820px]">
            <div className="text-center">
              <SectionLabel>O ponto em que tudo muda</SectionLabel>

              <h2 className="font-display text-[1.58rem] font-medium leading-[1.13] text-[var(--ink)] sm:text-[1.95rem]">
                Você não muda de decisão
                <span className="italic text-[var(--clay-deep)]">
                  {' '}
                  do nada.
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-[0.91rem] leading-relaxed text-[var(--ink-soft)]">
                Existe um momento em que aquilo que parecia certo começa a
                perder força.
              </p>
            </div>

            <div className="mx-auto mt-6 max-w-[720px] overflow-hidden rounded-[18px] border border-[var(--line)] bg-white/55 sm:grid sm:grid-cols-3">
              <div className="px-5 py-4">
                <div className="flex items-start gap-4 sm:block">
                  <span className="font-display text-[0.8rem] text-[var(--clay)]">
                    01
                  </span>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] sm:mt-2">
                      Eu decido
                    </p>

                    <p className="mt-1.5 font-display text-[0.98rem] leading-snug text-[var(--ink)]">
                      “Dessa vez vou manter meu limite.”
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-5 py-4 sm:border-x sm:border-y-0">
                <div className="flex items-start gap-4 sm:block">
                  <span className="font-display text-[0.8rem] text-[var(--clay)]">
                    02
                  </span>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] sm:mt-2">
                      Algo ativa
                    </p>

                    <p className="mt-1.5 font-display text-[0.98rem] leading-snug text-[var(--ink)]">
                      Mensagem. Saudade. Culpa. Medo. Esperança.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4">
                <div className="flex items-start gap-4 sm:block">
                  <span className="font-display text-[0.8rem] text-[var(--clay)]">
                    03
                  </span>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] sm:mt-2">
                      Eu revejo
                    </p>

                    <p className="mt-1.5 font-display text-[0.98rem] leading-snug text-[var(--ink)]">
                      “Talvez agora seja diferente.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-[590px] text-center font-display text-[1.05rem] font-medium leading-relaxed text-[var(--ink)]">
              Na sessão, nós localizamos
              <span className="italic text-[var(--clay-deep)]">
                {' '}
                onde essa mudança começa{' '}
              </span>
              e definimos onde agir primeiro para começar a quebrar a repetição.
            </p>
          </div>
        </section>

        {/* MAPA */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-5 py-9 sm:px-6 sm:py-13">
          <div className="mx-auto max-w-[820px]">
            <div className="grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
              <div className="text-center md:text-left">
                <SectionLabel>Você não sai apenas com uma conversa</SectionLabel>

                <h2 className="font-display text-[1.58rem] font-medium leading-[1.15] text-[var(--ink)] sm:text-[1.9rem]">
                  Você recebe seu
                  <span className="italic text-[var(--clay-deep)]">
                    {' '}
                    Mapa de Padrão Emocional personalizado.
                  </span>
                </h2>

                <p className="mx-auto mt-4 max-w-md text-[0.92rem] leading-relaxed text-[var(--ink-soft)] md:mx-0">
                  Depois da sessão, os principais pontos encontrados ficam
                  organizados em um material construído a partir do seu
                  atendimento.
                </p>

                <p className="mx-auto mt-4 max-w-md font-display text-[1.02rem] font-medium leading-relaxed text-[var(--ink)] md:mx-0">
                  Você enxerga o ciclo, o ponto em que sua decisão perde força e
                  <span className="italic text-[var(--clay-deep)]">
                    {' '}
                    onde agir primeiro.
                  </span>
                </p>
              </div>

              <div className="mx-auto w-full max-w-[300px]">
                <div className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-white/70 p-1.5 shadow-[0_14px_35px_rgba(65,45,35,0.09)]">
                  <img
                    src="/mapa-padrao-emocional.jpg"
                    alt="Imagem ilustrativa do Mapa de Padrão Emocional"
                    className="aspect-[4/5] w-full rounded-[13px] object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="mt-2 text-center text-[9px] leading-relaxed text-[var(--ink-soft)]">
                  Imagem ilustrativa. O conteúdo do mapa é construído a partir
                  da sua sessão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALOR */}
        <section className="px-5 py-9 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-[720px]">
            <div className="text-center">
              <SectionLabel>O que está incluído</SectionLabel>

              <h2 className="font-display text-[1.58rem] font-medium leading-[1.15] text-[var(--ink)] sm:text-[1.9rem]">
                Não são apenas
                <span className="italic text-[var(--clay-deep)]">
                  {' '}
                  90 minutos de conversa.
                </span>
              </h2>
            </div>

            <div className="mx-auto mt-6 max-w-[620px] divide-y divide-[var(--line)] border-y border-[var(--line)]">
              <div className="grid grid-cols-[68px_1fr] gap-4 py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--clay)]">
                  Antes
                </p>

                <div>
                  <p className="font-display text-[1rem] font-medium text-[var(--ink)]">
                    Você não começa do zero.
                  </p>

                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--ink-soft)]">
                    Formulário pré-sessão + análise das informações antes do
                    encontro.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[68px_1fr] gap-4 py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--clay)]">
                  Durante
                </p>

                <div>
                  <p className="font-display text-[1rem] font-medium text-[var(--ink)]">
                    Localizamos onde a decisão muda.
                  </p>

                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--ink-soft)]">
                    Até 90 minutos para reconstruir situações, organizar o ciclo
                    e definir onde agir primeiro.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[68px_1fr] gap-4 py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--clay)]">
                  Depois
                </p>

                <div>
                  <p className="font-display text-[1rem] font-medium text-[var(--ink)]">
                    Você leva o seu mapa.
                  </p>

                  <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--ink-soft)]">
                    Mapa de Padrão Emocional personalizado enviado pelo
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROVA */}
<section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-5 py-8 sm:px-6 sm:py-11">
  <div className="mx-auto max-w-[760px]">
    <div className="text-center">
      <SectionLabel>Quem já passou pela sessão</SectionLabel>

      <h2 className="font-display text-[1.48rem] font-medium leading-[1.15] text-[var(--ink)] sm:text-[1.8rem]">
        Quando você consegue enxergar
        <span className="italic text-[var(--clay-deep)]">
          {' '}onde começa a ceder.
        </span>
      </h2>
    </div>

    <div className="mx-auto mt-5 max-w-[620px] divide-y divide-[var(--line)] border-y border-[var(--line)]">

      <figure className="py-4">
        <blockquote className="font-display text-[0.91rem] italic leading-[1.55] text-[var(--ink)]">
          “Percebi que eu não mudava de decisão do nada. Existiam situações
          muito específicas em que eu começava a ceder. Isso foi o que mais me
          marcou.”
        </blockquote>

        <figcaption className="mt-2 text-[9px] font-medium tracking-wide text-[var(--ink-soft)]">
          — Cliente, 41 anos
        </figcaption>
      </figure>

      <figure className="py-4">
        <blockquote className="font-display text-[0.91rem] italic leading-[1.55] text-[var(--ink)]">
          “Saí da sessão entendendo qual ponto eu precisava observar primeiro.
          Não foi uma resposta pronta, mas finalmente senti que tinha um caminho
          para começar.”
        </blockquote>

        <figcaption className="mt-2 text-[9px] font-medium tracking-wide text-[var(--ink-soft)]">
          — Cliente, 35 anos
        </figcaption>
      </figure>

    </div>

    <p className="mt-3 text-center text-[8px] leading-relaxed text-[var(--ink-soft)]">
      Identificações preservadas para respeitar a privacidade das clientes.
    </p>
  </div>
</section>

        {/* AUTORIDADE */}
        <section className="px-5 py-9 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-[760px]">
            <div className="grid items-center gap-5 md:grid-cols-[0.58fr_1.42fr] md:gap-8">
              <div className="mx-auto w-full max-w-[175px] sm:max-w-[205px]">
                <div className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-white/70 p-1.5 shadow-sm">
                  <img
                    src="/erica-soares.jpg"
                    alt="Érica Soares"
                    className="aspect-[4/5] w-full rounded-[13px] object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <SectionLabel>Quem conduz a sessão</SectionLabel>

                <h2 className="font-display text-[1.48rem] font-medium leading-[1.17] text-[var(--ink)] sm:text-[1.8rem]">
                  Eu não vou decidir por você
                  <span className="italic text-[var(--clay-deep)]">
                    {' '}
                    se deve ficar ou terminar.
                  </span>
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-[0.92rem] leading-relaxed text-[var(--ink-soft)] md:mx-0">
                  Meu trabalho é localizar com você o momento em que aquilo que
                  parecia decidido começa a perder força — e definir onde agir
                  primeiro para começar a interromper a repetição.
                </p>

                <div className="mt-4 border-t border-[var(--line)] pt-4">
                  <p className="font-display text-[1.18rem] font-medium text-[var(--ink)]">
                    Érica Soares
                  </p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--clay)]">
                    Psicanalista
                  </p>

                  <p className="mt-1 text-[10px] leading-relaxed text-[var(--ink-soft)]">
                    Especialista em Neurociência do Comportamento Humano
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OBJEÇÕES */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-5 py-9 sm:px-6 sm:py-11">
          <div className="mx-auto max-w-[660px]">
            <div className="text-center">
              <SectionLabel>Antes de agendar</SectionLabel>

              <h2 className="font-display text-[1.5rem] font-medium leading-[1.15] text-[var(--ink)] sm:text-[1.8rem]">
                Talvez uma dessas dúvidas
                <span className="italic text-[var(--clay-deep)]">
                  {' '}
                  esteja passando pela sua cabeça.
                </span>
              </h2>
            </div>

            <div className="mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {OBJECTIONS.map((item) => (
                <details
                  key={item.title}
                  className="group py-3.5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="font-display text-[0.96rem] font-medium leading-snug text-[var(--ink)]">
                      {item.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg font-light text-[var(--clay)] transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-3 pr-7 text-[0.87rem] leading-relaxed text-[var(--ink-soft)]">
                    {item.text}
                  </p>
                </details>
              ))}
            </div>

            <p className="mx-auto mt-4 max-w-md text-center font-display text-[0.98rem] leading-relaxed text-[var(--ink)]">
              Você não precisa ter todas as respostas.
              <span className="italic text-[var(--clay-deep)]">
                {' '}
                Só precisa perceber que continuar repetindo do mesmo jeito já
                não é suficiente.
              </span>
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-5 py-10 sm:px-6 sm:py-15">
          <div className="mx-auto max-w-[610px] text-center">
            <SectionLabel>Seu próximo passo</SectionLabel>

            <h2 className="font-display text-[1.67rem] font-medium leading-[1.12] text-[var(--ink)] sm:text-[2rem]">
              Você já sabe o que não quer mais repetir.
              <span className="mt-2 block italic text-[var(--clay-deep)]">
                Agora precisa localizar onde essa repetição começa.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
              Na Sessão de Mapeamento, nós localizamos onde sua decisão começa a
              perder força e definimos onde agir primeiro.
            </p>

            <div className="mx-auto mt-5 max-w-[370px] border-y border-[var(--line)] py-4">
              <p className="text-[0.87rem] font-medium text-[var(--ink)]">
                Sessão individual online · até 90 minutos
              </p>

              <p className="mt-1 text-[0.82rem] text-[var(--ink-soft)]">
                + Mapa de Padrão Emocional personalizado
              </p>

              <p className="mt-2 text-[0.9rem] text-[var(--ink-soft)]">
  Investimento ·{' '}
  <span className="font-medium text-[var(--ink)]">
    R$ 147
  </span>
</p>
            </div>

            <div className="mt-5">
              <CtaButton />
            </div>

            <p className="mx-auto mt-3 max-w-sm text-[10px] leading-relaxed text-[var(--ink-soft)]">
              Você será direcionada ao WhatsApp para consultar os horários disponíveis. O agendamento só é confirmado após sua escolha.
            </p>

            <p className="mx-auto mt-3 max-w-md text-[10px] leading-relaxed text-[var(--ink-soft)]/80">
              Seu Mapa é enviado depois da sessão independentemente de qualquer
              continuidade.
            </p>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-[var(--line)] px-5 py-7">
        <div className="mx-auto max-w-md text-center">
          <p className="text-[10px] leading-relaxed text-[var(--ink-soft)]">
            Atendimento individual, online e confidencial.
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-[var(--ink-soft)]/75">
            Érica Soares · Psicanálise e Neurociência Aplicada
          </p>
        </div>
      </footer>
    </div>
  )
}