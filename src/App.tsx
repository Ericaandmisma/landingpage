import type { ReactNode } from 'react'

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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">
      {children}
    </span>
  )
}

function CheckList({ items }: { items: string[] }) {
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

function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
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
  'conversar mais uma vez',
  'colocar um limite claro',
  'se afastar por alguns dias ou semanas',
  'encerrar a relação',
  'prometer a si mesma que dessa vez seria diferente',
]

const IMPACT_ITEMS = [
  'rever decisões que pareciam definitivas',
  'flexibilizar limites que você mesma havia estabelecido',
  'duvidar cada vez mais do próprio julgamento',
  'sentir culpa quando tenta se priorizar',
  'perceber uma distância cada vez maior entre a relação que vive e a que deseja construir',
]

const OFFER_OUTCOMES = [
  'uma leitura estruturada do ciclo que apareceu durante a sessão',
  'uma hipótese estruturada sobre os padrões que podem estar influenciando suas escolhas',
  'clareza sobre como essa dinâmica pode estar impactando suas decisões e relações',
  'um foco prioritário escolhido com você para orientar o próximo passo',
]

const FAQ_ITEMS = [
  {
    question: 'O que eu vou levar comigo depois da sessão?',
    answer:
      'Ao final, você terá uma leitura estruturada do ciclo que apareceu durante a sessão, uma hipótese sobre os padrões que podem estar influenciando suas escolhas e um foco prioritário para orientar seu próximo passo. Depois do encontro, você também recebe pelo WhatsApp o seu Mapa de Padrão Emocional personalizado.',
  },
  {
    question: 'Como a Érica se prepara para a minha sessão?',
    answer:
      'Antes do encontro, você responde um formulário com informações sobre o que está vivendo. Esse material é analisado previamente para organizar os principais pontos que precisam ser aprofundados. Durante a sessão, partimos dessas informações para investigar situações concretas, repetições e os momentos em que suas decisões começam a mudar.',
  },
  {
    question: 'Preciso já saber exatamente qual é o meu problema?',
    answer:
      'Não. Muitas pessoas chegam justamente porque conseguem perceber que algo se repete, mas ainda não conseguem organizar o que está acontecendo. O papel do mapeamento é transformar essa sensação difusa em uma leitura mais estruturada do ciclo e do ponto que merece atenção primeiro.',
  },
  {
    question: 'Preciso estar decidida a terminar minha relação?',
    answer:
      'Não. Você não precisa chegar com uma decisão tomada. O foco da sessão é compreender melhor o que pode estar influenciando suas escolhas para que consiga olhar para a situação com mais estrutura antes de decidir seus próximos passos.',
  },
  {
    question: 'O que é possível fazer em uma única sessão?',
    answer:
      'A proposta é chegar a um primeiro mapa: identificar como o ciclo aparece, compreender quais pontos parecem sustentar essa repetição e definir qual merece atenção prioritária. Questões construídas ao longo do tempo podem exigir um trabalho posterior mais aprofundado, mas a sessão já oferece uma direção concreta de onde começar.',
  },
  {
    question: 'Preciso continuar em outro processo depois?',
    answer:
      'Não. A Sessão de Mapeamento é uma entrega independente. Você recebe sua devolutiva e o seu Mapa de Padrão Emocional mesmo que decida não dar continuidade a nenhum outro processo.',
  },
  {
    question: 'Quanto tempo dura e como faço para agendar?',
    answer:
      'O atendimento é individual, online e tem duração de até 90 minutos. O investimento é de R$147. O pagamento e a escolha do horário são combinados diretamente pelo WhatsApp.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="grain" />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-[var(--line)] px-7 pb-14 pt-3 sm:px-6 sm:pb-24 sm:pt-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--clay)]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-[var(--clay)]/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="rise-in mb-4 flex justify-center sm:mb-8">
            <img
              src="/logo-erica.jpg"
              alt="Érica Soares — Psicanálise e Neurociência Aplicada"
              className="w-28 mix-blend-multiply sm:w-36"
            />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="rise-in mb-5 text-[12px] font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                Sessão de Mapeamento de Padrão
              </p>

              <h1
                className="rise-in font-display text-[1.78rem] font-medium leading-[1.08] text-[var(--ink)] sm:text-[2.75rem] lg:text-[3.05rem]"
                style={{ animationDelay: '0.08s' }}
              >
                Você sabe o que gostaria de fazer.

                <span className="mt-2 block italic text-[var(--clay-deep)]">
                  Mas, quando chega a hora de sustentar essa decisão, acaba
                  cedendo.
                </span>
              </h1>

              <p
                className="rise-in mx-auto mt-6 max-w-xl font-display text-[1.05rem] leading-[1.65] text-[var(--ink-soft)] sm:text-[1.2rem] lg:mx-0"
                style={{ animationDelay: '0.16s' }}
              >
                Você se afasta e volta. Tenta colocar limites, mas flexibiliza.
                Ou percebe que continua em relações que não combinam com aquilo
                que deseja construir.
              </p>

              <p
                className="rise-in mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--ink)] lg:mx-0"
                style={{ animationDelay: '0.22s' }}
              >
                Na Sessão de Mapeamento de Padrão, você organiza o ciclo que se
                repete, identifica o que pode estar influenciando suas escolhas
                e define qual ponto merece atenção primeiro.
              </p>

              <div
                className="rise-in mt-7 flex justify-center lg:justify-start"
                style={{ animationDelay: '0.28s' }}
              >
                <div className="flex flex-col items-center">
                  <CtaButton />

                  <p className="mt-4 text-center text-sm text-[var(--ink-soft)]">
                    Online · Individual · até 90 minutos · R$147
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rise-in relative mx-auto w-full max-w-md"
              style={{ animationDelay: '0.14s' }}
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-[var(--clay)]/10 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/60 p-2 shadow-[0_20px_60px_rgba(65,45,35,0.12)]">
                <img
                  src="/erica-topo.jpg"
                  alt="Érica Soares"
                  className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--paper)]/95 px-5 py-2 text-xs font-medium tracking-wide text-[var(--ink-soft)] shadow-sm backdrop-blur">
                Atendimento individual e online
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* IDENTIFICAÇÃO */}
<section className="px-6 py-14 sm:py-16">
  <div className="mx-auto max-w-[1040px]">

    {/* CABEÇALHO */}
    <div className="text-center">
      <SectionLabel>Quando saber não basta</SectionLabel>

      <h2 className="font-display text-[1.65rem] font-medium leading-[1.18] text-[var(--ink)] sm:text-[2.05rem]">
        Você decide. Tenta se posicionar.

        <span className="mt-2 block italic text-[var(--clay-deep)]">
          Mas, quando a relação aperta, acaba negociando aquilo que já tinha
          decidido não aceitar.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-[650px] text-[1rem] leading-relaxed text-[var(--ink-soft)]">
        Talvez você saiba exatamente o que gostaria que fosse diferente. O
        difícil é sustentar essa decisão quando entram em cena o vínculo, a
        culpa, o medo de perder ou a esperança de que agora seja diferente.
      </p>
    </div>

    {/* MAPA VISUAL */}
    <div className="relative mx-auto mt-14 max-w-[960px]">

      {/* LINHA EDITORIAL AO FUNDO — DESKTOP */}
      <div
        aria-hidden="true"
        className="absolute left-[13%] right-[13%] top-[50%] hidden h-px bg-[var(--line)] md:block"
      />

      <div className="relative grid gap-10 md:grid-cols-[0.86fr_1.12fr_0.86fr] md:items-center md:gap-12">

        {/* 01 — EU DECIDO */}
        <div className="relative md:translate-y-5">
          <div className="border-t border-[var(--line)] pt-5 text-left">

            <span className="font-display text-[0.82rem] tracking-[0.18em] text-[var(--clay)]">
              01
            </span>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--clay)]">
              Eu decido
            </p>

            <p className="mt-4 font-display text-[1.28rem] font-medium leading-[1.3] text-[var(--ink)]">
              “Dessa vez, vou
              <span className="italic text-[var(--clay-deep)]">
                {' '}
                manter meu limite.
              </span>
              ”
            </p>

            <p className="mt-4 max-w-[230px] text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
              Você sabe o que gostaria de fazer. E, naquele momento, a decisão
              parece clara.
            </p>
          </div>
        </div>

        {/* 02 — ALGO ATIVA */}
        <div className="relative">

          {/* ANOTAÇÃO EDITORIAL */}
          <div className="mb-4 flex items-center gap-3 md:absolute md:-top-10 md:left-0 md:mb-0">
            <span
              aria-hidden="true"
              className="hidden h-px w-8 bg-[var(--clay)]/60 md:block"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--clay)]">
              É aqui que vale investigar
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[18px] border border-[var(--clay)]/20 bg-[var(--paper-warm)] p-7 text-left shadow-[0_18px_50px_-35px_rgba(91,56,42,0.35)] sm:p-8">

            {/* ACENTO VISUAL */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[3px] bg-[var(--clay)]"
            />

            <span className="font-display text-[0.82rem] tracking-[0.18em] text-[var(--clay)]">
              02
            </span>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--clay)]">
              Algo ativa
            </p>

            <h3 className="mt-4 font-display text-[1.5rem] font-medium leading-[1.2] text-[var(--ink)] sm:text-[1.65rem]">
              A decisão
              <span className="italic text-[var(--clay-deep)]">
                {' '}
                começa a mudar.
              </span>
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'mensagem',
                'saudade',
                'culpa',
                'medo',
                'esperança',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-[0.82rem] text-[var(--ink-soft)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-[300px] text-[0.96rem] leading-relaxed text-[var(--ink-soft)]">
              O que parecia claro começa a balançar — e nem sempre é fácil
              perceber exatamente em que ponto isso aconteceu.
            </p>
          </div>
        </div>

        {/* 03 — EU REVEJO */}
        <div className="relative md:-translate-y-3">
          <div className="border-t border-[var(--line)] pt-5 text-left">

            <span className="font-display text-[0.82rem] tracking-[0.18em] text-[var(--clay)]">
              03
            </span>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--clay)]">
              Eu revejo
            </p>

            <div className="mt-4 space-y-1 font-display text-[1.24rem] font-medium leading-[1.35] text-[var(--ink)]">
              <p>“Talvez eu tenha exagerado.”</p>

              <p className="italic text-[var(--clay-deep)]">
                “Talvez agora seja diferente.”
              </p>
            </div>

            <p className="mt-4 max-w-[230px] text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
              A pessoa pode até mudar. Mas a dinâmica começa a parecer
              familiar outra vez.
            </p>
          </div>
        </div>
      </div>

      {/* FECHAMENTO */}
      <div className="mx-auto mt-14 max-w-[760px] border-t border-[var(--line)] pt-9 text-center sm:mt-16">

        <p className="font-display text-[1.25rem] font-medium leading-relaxed text-[var(--ink)] sm:text-[1.42rem]">
          É nesse intervalo —
          <span className="italic text-[var(--clay-deep)]">
            {' '}
            entre decidir e conseguir sustentar a decisão
          </span>
          {' '}— que vale olhar com mais atenção.
        </p>

        <p className="mx-auto mt-4 max-w-[650px] text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
          A Sessão de Mapeamento investiga justamente esse ponto: o que acontece
          entre aquilo que você decide e aquilo que consegue sustentar quando
          existe envolvimento emocional.
        </p>
      </div>
    </div>
  </div>
</section>
        {/* IMPACTO */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-[880px]">
            <div className="text-center">
              <SectionLabel>O custo da repetição</SectionLabel>

              <h2 className="font-display text-[1.65rem] font-medium leading-[1.18] text-[var(--ink)] sm:text-[2.05rem]">
                O impacto não está apenas na relação.

                <span className="mt-2 block italic text-[var(--clay-deep)]">
                  Aos poucos, você pode começar a desconfiar das próprias
                  decisões.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                Quando o mesmo tipo de impasse aparece várias vezes, o desgaste
                pode atingir justamente aquilo que você mais precisa para fazer
                escolhas: confiança no próprio julgamento.
              </p>
            </div>

            <div className="mx-auto mt-9 max-w-xl rounded-[22px] border border-[var(--line)] bg-white/60 p-6 sm:p-7">
              <ul className="space-y-3">
                {IMPACT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--clay)]" />

                    <span className="text-[1rem] leading-relaxed text-[var(--ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center font-display text-[1.18rem] leading-relaxed text-[var(--ink)] sm:text-[1.28rem]">
              E é aí que tentar simplesmente
              <span className="italic text-[var(--clay-deep)]">
                {' '}
                “ser mais forte da próxima vez”{' '}
              </span>
              costuma ser insuficiente.
            </p>
          </div>
        </section>

        {/* VIRADA */}
        <section className="px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-[820px] text-center">
            <SectionLabel>Antes de tentar de novo</SectionLabel>

            <h2 className="font-display text-[1.65rem] font-medium leading-[1.18] text-[var(--ink)] sm:text-[2.05rem]">
              Talvez você não precise de mais um conselho sobre
              <span className="italic text-[var(--clay-deep)]">
                {' '}
                o que deveria fazer.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[var(--ink-soft)]">
              Você provavelmente já pensou, conversou, tentou se afastar ou
              estabeleceu limites. A questão é compreender o que acontece
              justamente nos momentos em que aquilo que parecia tão claro
              começa a perder força.
            </p>

            <div className="mx-auto mt-8 max-w-[680px] border-l-2 border-[var(--clay)] px-5 py-2 text-left">
              <p className="font-display text-[1.2rem] leading-relaxed text-[var(--ink)] sm:text-[1.32rem]">
                Quando existe repetição, vale investigar
                <span className="italic text-[var(--clay-deep)]">
                  {' '}
                  o ciclo, os momentos que o ativam e o ponto em que sua decisão
                  começa a mudar.
                </span>
              </p>

              <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
                Não para encontrar uma explicação única, mas para transformar a
                repetição em algo que possa ser observado e compreendido com
                mais estrutura.
              </p>
            </div>

            <p className="mx-auto mt-8 max-w-xl font-display text-[1.18rem] leading-relaxed text-[var(--ink)] sm:text-[1.28rem]">
              É exatamente esse o papel da
              <span className="font-medium text-[var(--clay-deep)]">
                {' '}
                Sessão de Mapeamento de Padrão.
              </span>
            </p>
          </div>
        </section>

        {/* OFERTA */}
        <section
          id="oferta"
          className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-6 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-[820px]">
            <div className="rounded-[28px] border border-[var(--line)] bg-white/70 p-7 shadow-[0_30px_60px_-30px_rgba(43,36,31,0.22)] sm:p-10">
              <div className="text-center">
                <SectionLabel>A sessão</SectionLabel>

                <h2 className="font-display text-[1.8rem] font-medium leading-tight text-[var(--ink)] sm:text-[2.15rem]">
                  Sessão de Mapeamento de Padrão
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                  Um encontro individual para organizar aquilo que hoje parece
                  confuso, identificar como o ciclo se repete e definir qual
                  ponto merece atenção primeiro.
                </p>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay)]">
                    01 · Investigação
                  </p>

                  <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--ink)]">
                    Partimos do que você relatou e aprofundamos situações
                    concretas em que a repetição aparece.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay)]">
                    02 · Mapeamento
                  </p>

                  <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--ink)]">
                    Organizamos o ciclo e avaliamos quais padrões podem estar
                    participando dessa dinâmica.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay)]">
                    03 · Foco
                  </p>

                  <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--ink)]">
                    Entre os pontos encontrados, definimos com você qual merece
                    atenção prioritária a partir daqui.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[22px] border border-[var(--clay)]/20 bg-[var(--clay)]/[0.05] p-6 sm:p-7">
                <p className="font-display text-[1.15rem] font-medium text-[var(--ink)]">
                  Ao final da sessão, você terá:
                </p>

                <CheckList items={OFFER_OUTCOMES} />

                <div className="mt-6 border-t border-[var(--line)] pt-5">
                  <p className="text-[0.96rem] leading-relaxed text-[var(--ink-soft)]">
                    Depois da sessão, você recebe pelo WhatsApp o seu
                    <strong className="font-medium text-[var(--ink)]">
                      {' '}
                      Mapa de Padrão Emocional personalizado
                    </strong>
                    , com os principais pontos identificados e o foco escolhido.
                  </p>
                </div>
              </div>

              <div className="mt-7 text-center">
                <p className="font-display text-[1.08rem] text-[var(--ink)]">
                  Sua devolutiva não depende de contratar outro processo.
                </p>

                <p className="mx-auto mt-2 max-w-xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                  Você recebe seu Mapa de Padrão Emocional depois da sessão,
                  mesmo que decida não continuar em outro processo.
                </p>
              </div>

              <div className="mt-8 border-t border-[var(--line)] pt-7 text-center">
                <p className="text-sm text-[var(--ink-soft)]">
                  Atendimento individual e online · até 90 minutos
                </p>

                <p className="mt-2 font-display text-[1.6rem] font-semibold text-[var(--ink)]">
                  R$147
                </p>

                <div className="mt-6 flex justify-center">
                  <CtaButton />
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[var(--ink-soft)]">
                  Agendamento e pagamento pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-[880px]">
            <div className="text-center">
              <SectionLabel>Depois de enxergar o ciclo</SectionLabel>

              <h2 className="font-display text-[1.6rem] font-medium leading-[1.18] text-[var(--ink)] sm:text-[1.95rem]">
                Às vezes, o primeiro avanço é conseguir
                <span className="italic text-[var(--clay-deep)]">
                  {' '}
                  dar nome ao que antes parecia apenas confuso.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
                Alguns relatos de quem já passou pela Sessão de Mapeamento de
                Padrão.
              </p>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <figure className="rounded-[22px] border border-[var(--line)] bg-white/70 p-7 shadow-sm">
                <div className="mb-4 font-display text-[2rem] leading-none text-[var(--clay)]/40">
                  “
                </div>

                <blockquote className="font-display text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
                  Eu já tinha pensado muito sobre isso, mas nunca tinha
                  conseguido organizar o que estava acontecendo. Na sessão,
                  consegui enxergar o ciclo de uma forma muito mais clara.
                </blockquote>

                <figcaption className="mt-5 text-sm font-medium tracking-wide text-[var(--ink-soft)]">
                  — Cliente, 38 anos
                </figcaption>
              </figure>

              <figure className="rounded-[22px] border border-[var(--line)] bg-white/70 p-7 shadow-sm">
                <div className="mb-4 font-display text-[2rem] leading-none text-[var(--clay)]/40">
                  “
                </div>

                <blockquote className="font-display text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
                  Percebi que eu não mudava de decisão do nada. Existiam
                  situações muito específicas em que eu começava a ceder. Isso
                  foi o que mais me marcou.
                </blockquote>

                <figcaption className="mt-5 text-sm font-medium tracking-wide text-[var(--ink-soft)]">
                  — Cliente, 41 anos
                </figcaption>
              </figure>

              <figure className="rounded-[22px] border border-[var(--line)] bg-white/70 p-7 shadow-sm">
                <div className="mb-4 font-display text-[2rem] leading-none text-[var(--clay)]/40">
                  “
                </div>

                <blockquote className="font-display text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
                  Eu tinha medo de ouvir que precisava terminar ou tomar alguma
                  decisão. Foi diferente. Eu me senti ouvida e consegui olhar
                  para o que estava acontecendo sem me sentir julgada.
                </blockquote>

                <figcaption className="mt-5 text-sm font-medium tracking-wide text-[var(--ink-soft)]">
                  — Cliente, 32 anos
                </figcaption>
              </figure>

              <figure className="rounded-[22px] border border-[var(--line)] bg-white/70 p-7 shadow-sm">
                <div className="mb-4 font-display text-[2rem] leading-none text-[var(--clay)]/40">
                  “
                </div>

                <blockquote className="font-display text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
                  Saí da sessão entendendo qual ponto eu precisava observar
                  primeiro. Não foi uma resposta pronta, mas finalmente senti
                  que tinha um caminho para começar.
                </blockquote>

                <figcaption className="mt-5 text-sm font-medium tracking-wide text-[var(--ink-soft)]">
                  — Cliente, 35 anos
                </figcaption>
              </figure>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-[var(--ink-soft)]/75">
              Identificações preservadas para respeitar a privacidade das
              clientes.
            </p>
          </div>
        </section>

        {/* AUTORIDADE */}
        <section className="border-y border-[var(--line)] bg-[var(--paper-warm)] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-[1050px]">
            <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
              <div className="mx-auto w-full max-w-[390px]">
                <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/70 p-2 shadow-[0_20px_50px_rgba(65,45,35,0.10)]">
                  <img
                    src="/erica-soares.jpg"
                    alt="Érica Soares, psicanalista"
                    className="aspect-[4/5] w-full rounded-[22px] object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="font-display text-[1.45rem] font-medium text-[var(--ink)]">
                    Érica Soares
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay)]">
                    Psicanalista
                  </p>

                  <p className="mx-auto mt-2 max-w-xs text-xs uppercase leading-relaxed tracking-[0.12em] text-[var(--ink-soft)]">
                    Especialista em Neurociência do Comportamento Humano
                  </p>
                </div>
              </div>

              <div className="text-center md:text-left">
                <SectionLabel>Quem conduz essa análise</SectionLabel>

                <h2 className="font-display text-[1.75rem] font-medium leading-[1.18] text-[var(--ink)] sm:text-[2.15rem]">
                  Meu trabalho é localizar onde essa repetição começa a
                  interferir nas suas escolhas
                  <span className="mt-2 block italic text-[var(--clay-deep)]">
                    — e transformar isso em um primeiro foco de mudança.
                  </span>
                </h2>

                <p className="mt-6 text-[1rem] leading-relaxed text-[var(--ink-soft)]">
                  Você pode já saber que quer colocar um limite, se afastar ou
                  fazer escolhas diferentes. O que nem sempre está claro é o
                  que acontece quando entra vínculo, culpa, medo, expectativa
                  ou esperança — e aquela decisão começa a perder força.
                </p>

                <p className="mt-5 text-[1rem] leading-relaxed text-[var(--ink)]">
                  É justamente esse intervalo entre o que você sabe que
                  gostaria de fazer e aquilo que consegue sustentar na prática
                  que eu investigo na Sessão de Mapeamento.
                </p>

                <div className="mt-7 rounded-[24px] border border-[var(--line)] bg-white/70 p-6 sm:p-7">
                  <p className="font-display text-[1.12rem] font-medium text-[var(--ink)]">
                    A análise começa antes da nossa chamada.
                  </p>

                  <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--ink-soft)]">
                    As informações que você compartilha no formulário ajudam a
                    organizar os pontos que precisam ser aprofundados. Durante
                    o encontro, eu procuro localizar:
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      'o que acontece antes de você ceder ou mudar de decisão',
                      'quais situações parecem reativar a mesma dinâmica',
                      'onde existe distância entre aquilo que você deseja e aquilo que consegue sustentar',
                      'quais explicações parecem fazer sentido quando confrontadas com situações reais',
                      'qual ponto, entre os encontrados, merece atenção primeiro',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--clay)]" />

                        <span className="text-[0.98rem] leading-relaxed text-[var(--ink)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-l-2 border-[var(--clay)] pl-5 text-left">
                  <p className="font-display text-[1.15rem] leading-relaxed text-[var(--ink)] sm:text-[1.22rem]">
                    Ao final, você não precisa sair com todas as respostas.
                    Precisa sair sabendo onde concentrar sua atenção primeiro
                    para começar a mudar a dinâmica que hoje impede você de
                    viver a relação que deseja construir.
                  </p>
                </div>

                <p className="mt-6 text-[0.94rem] leading-relaxed text-[var(--ink-soft)]">
                  A análise é construída a partir do que você compartilha, sem
                  respostas prontas ou decisões impostas a você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-[720px]">
            <div className="text-center">
              <SectionLabel>Perguntas frequentes</SectionLabel>

              <h2 className="font-display text-[1.65rem] font-medium leading-tight text-[var(--ink)] sm:text-[2rem]">
                O que você pode querer saber antes de agendar
              </h2>
            </div>

            <div className="mt-7">
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
        <section className="border-t border-[var(--line)] bg-[var(--paper-warm)] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-[720px] text-center">
            <SectionLabel>Seu próximo passo</SectionLabel>

            <h2 className="font-display text-[1.75rem] font-medium leading-[1.18] text-[var(--ink)] sm:text-[2.2rem]">
              Você não precisa esperar o ciclo se repetir
              <span className="block italic text-[var(--clay-deep)]">
                para tentar entendê-lo.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--ink-soft)]">
              Se você já percebe que existe uma distância entre a relação que
              deseja viver e aquilo que acaba conseguindo sustentar, talvez o
              próximo passo não seja tentar decidir mais uma vez — mas entender
              onde essa decisão começa a mudar.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="flex flex-col items-center">
                <CtaButton />

                <p className="mt-4 text-sm text-[var(--ink-soft)]">
                  Online · Individual · até 90 minutos · R$147
                </p>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-[var(--ink-soft)]">
              Agendamento e pagamento pelo WhatsApp. Sua devolutiva é enviada
              depois da sessão independentemente de qualquer continuidade.
            </p>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-[var(--line)] px-6 py-10">
        <div className="mx-auto max-w-md text-center text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>Atendimento individual, online e confidencial.</p>

          <p className="mt-2 font-display italic text-[15px]">
            Para quem percebe que já tentou decidir diferente, mas ainda
            encontra dificuldade para sustentar essa decisão.
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