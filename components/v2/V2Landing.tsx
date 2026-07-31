"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock3,
  MessageCircleMore,
  Sparkles,
  Users,
} from "lucide-react";
import styles from "./v2.module.css";

const primaryHref = "https://aiassistente.com.br";
const supportHref = "mailto:contato@aiassistente.com.br";

const navLinks = [
  ["Serviços", "#servicos"],
  ["Como funciona", "#como-funciona"],
  ["Quem atende", "#quem-atende"],
  ["Por que a AI Assistente", "#por-que"],
  ["Planos", "#planos"],
];

const serviceCards = [
  {
    icon: MessageCircleMore,
    title: "Dúvidas recorrentes",
    text: "Respostas curtas, consistentes e no tom da sua marca para o que mais chega todo dia.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "Capta dados, confirma disponibilidade e encaminha o próximo passo sem atrito.",
  },
  {
    icon: Users,
    title: "Triagem com contexto",
    text: "Quando o caso pede cuidado humano, a conversa chega para a equipe pronta para continuar.",
  },
  {
    icon: BadgeCheck,
    title: "Leads qualificados",
    text: "Organiza intenção, urgência e prioridade antes de passar o contato adiante.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Free consultation",
    text: "Entendemos o fluxo, os canais e onde a operação mais perde tempo.",
  },
  {
    step: "02",
    title: "We build it",
    text: "Configuramos o assistente, o tom e os gatilhos de repasse humano.",
  },
  {
    step: "03",
    title: "Go live",
    text: "Entramos no ar rápido e ajustamos com base nas conversas reais.",
  },
  {
    step: "04",
    title: "Ongoing support",
    text: "Acompanhamos a rotina para refinar respostas, limites e prioridades.",
  },
];

const audience = [
  "Escritórios e serviços profissionais",
  "Operações comerciais com alto volume",
  "Clínicas e saúde com triagem sensível",
  "Times que precisam de resposta rápida",
  "Empresas que não podem perder contexto",
  "Negócios que querem escalar com calma",
  "Atendimento via WhatsApp e web",
  "Equipes que valorizam handoff humano",
];

const testimonials = [
  {
    quote:
      "A conversa ficou mais calma. A IA resolve o básico e o time entra só quando existe nuance, urgência ou decisão.",
    name: "Coordenação de atendimento",
    meta: "Operações com alto volume",
  },
  {
    quote:
      "Parece menos um chatbot e mais uma experiência editorial: clara, leve e muito mais coerente com a marca.",
    name: "Marketing e experiência",
    meta: "Serviços e saúde",
  },
  {
    quote:
      "Quando o caso passa para humano, o histórico chega pronto. Ninguém precisa repetir tudo do zero.",
    name: "Operações comerciais",
    meta: "Captação e conversão",
  },
];

const included = [
  "Base de conhecimento conectada e organizada",
  "Handoff humano com contexto pronto",
  "Agendamento, triagem e qualificação no mesmo fluxo",
];

const planBullets = [
  "Assistente com sua base de conhecimento",
  "Fluxo de handoff com histórico preservado",
  "Canais prontos para uso em web e WhatsApp",
  "Ajustes leves para entrar no ar sem drama",
];

const faqs = [
  [
    "A IA responde com a minha própria base?",
    "Sim. Você conecta os materiais da operação e define os limites para que a resposta saia do contexto do seu negócio.",
  ],
  [
    "Quando a conversa vai para uma pessoa?",
    "Você define gatilhos como tema sensível, baixa confiança, pedido explícito ou qualquer regra da operação.",
  ],
  [
    "Consigo captar leads e agendar horários?",
    "Sim. O fluxo pode qualificar interesse, coletar dados e avançar para agendamento sem quebrar a experiência.",
  ],
];

function Logo() {
  return (
    <Link href="/v2" className={styles.logo} aria-label="AI Assistente — início">
      <span className={styles.logoMark}>
        <Sparkles size={15} />
      </span>
      <span>
        ai<span>assistente</span>
      </span>
    </Link>
  );
}

function MiniPreview() {
  return (
    <div className={styles.preview} aria-label="Exemplo de atendimento com handoff humano">
      <div className={styles.previewHeader}>
        <div>
          <strong>Assistente da operação</strong>
          <span>
            <i /> online no WhatsApp
          </span>
        </div>
        <div className={styles.previewChip}>
          <BadgeCheck size={13} /> handoff seguro
        </div>
      </div>

      <div className={styles.previewThread}>
        <div className={`${styles.previewBubble} ${styles.previewBubbleClient}`}>
          Vocês conseguem responder dúvidas e agendar?
        </div>
        <div className={styles.previewBubble}>
          Sim — posso responder o básico, checar disponibilidade e passar para alguém do time se precisar.
        </div>
        <div className={`${styles.previewBubble} ${styles.previewBubbleHuman}`}>
          Marina • humano
          <span>Assumi com o histórico pronto e sigo sem repetição.</span>
        </div>
      </div>

      <div className={styles.previewFooter}>
        <span>Digite uma mensagem...</span>
        <button type="button" aria-label="Enviar mensagem">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function V2Landing() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  const pricing = useMemo(() => {
    if (billing === "annual") {
      return {
        tag: "Anual",
        price: "R$ 490",
        cadence: "/mês",
        note: "Cobrança anual com desconto e onboarding mais guiado.",
      };
    }

    return {
      tag: "Mensal",
      price: "R$ 740",
      cadence: "/mês",
      note: "Mais flexível para começar e validar o fluxo sem compromisso longo.",
    };
  }, [billing]);

  return (
    <div id="v2-page" className={styles.v2Page}>
      <header className={styles.headerWrap}>
        <nav className={styles.header} aria-label="Navegação principal">
          <Logo />

          <div className={styles.navLinks}>
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div className={styles.navActions}>
            <a href={supportHref} className={styles.ghostButton}>
              Sou cliente
            </a>
            <a href={primaryHref} className={styles.darkButton}>
              Comece agora <ArrowRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="inicio">
          <div className={styles.heroTopline}>
            <span className={styles.kicker}>AI + handoff humano</span>
            <span className={styles.heroPill}>4.9 ★ em operações reais</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                Atendimento inteligente
                <br />
                para quem precisa de contexto.
              </h1>

              <p className={styles.heroLead}>
                A AI Assistente responde as dúvidas repetidas, organiza o agendamento e chama alguém da equipe quando o cuidado precisa ser humano.
              </p>

              <div className={styles.heroActions}>
                <a href={primaryHref} className={styles.darkButton}>
                  Criar meu assistente <ArrowRight size={17} />
                </a>
                <a href="#servicos" className={styles.lightButton}>
                  <MessageCircleMore size={17} />
                  Ver usos rápidos
                </a>
              </div>

              <div className={styles.heroProof}>
                <span>
                  <Check size={14} /> Responde 24h com o tom da marca
                </span>
                <span>
                  <Check size={14} /> Passa para humano com histórico
                </span>
                <span>
                  <Check size={14} /> Menos repetição, mais calma
                </span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroQuote}>
                <Clock3 size={14} /> resolve o primeiro nível sem cansar o time
              </div>
              <MiniPreview />
              <div className={styles.heroNote}>
                <BadgeCheck size={16} /> Marina entrou sem pedir o histórico de novo.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection} id="servicos">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Do que você precisa agora?</span>
              <h2>
                Resolva os fluxos mais comuns.
                <br />
                <em>Sem perder a elegância.</em>
              </h2>
            </div>
            <p>
              Uma faixa simples para o que mais chega todo dia: dúvidas, agendamento, triagem, qualificação e repasse humano.
            </p>
          </div>

          <div className={styles.servicesRail}>
            {serviceCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={primaryHref} className={styles.serviceLink}>
                  Ver exemplo <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.stepsSection} id="como-funciona">
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Live in days, not months</span>
              <h2>
                Entrar no ar é simples.
                <br />
                <em>Depois a gente lapida.</em>
              </h2>
            </div>
            <p>
              Um caminho curto, com menos fricção e menos camadas. A ideia é fazer a operação funcionar rápido e sem excesso de conversa.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepsList}>
              {howItWorks.map((item) => (
                <article key={item.step} className={styles.stepCard}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className={styles.sidePanel} aria-label="Resumo do fluxo">
              <div className={styles.sidePanelHeader}>
                <strong>AI Assistente</strong>
                <span>Hoje</span>
              </div>
              <ul>
                <li>captura a intenção logo no início</li>
                <li>qualifica antes de repassar</li>
                <li>preserva o contexto para o humano</li>
                <li>evita repetição desnecessária</li>
              </ul>
              <div className={styles.sidePanelFooter}>
                <span>Fluxo limpo, simples e pronto para adaptar.</span>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.audienceSection} id="quem-atende">
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Built for businesses where things can’t fall through the cracks</span>
              <h2>
                Feito para quem não pode deixar a conversa cair.
                <br />
                <em>Nem perder contexto no caminho.</em>
              </h2>
            </div>
            <a href={primaryHref} className={styles.textLink}>
              Veja como fica no seu caso <ArrowRight size={16} />
            </a>
          </div>

          <div className={styles.audienceStrip}>
            {audience.map((item) => (
              <span key={item} className={styles.audienceChip}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.featuresSection} id="por-que">
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>No fluff. No lock-in. No markup barulhento.</span>
              <h2>
                Uma experiência limpa.
                <br />
                <em>Com menos ruído e mais clareza.</em>
              </h2>
            </div>
            <p>
              O objetivo não é impressionar com excesso. É deixar o atendimento mais útil, mais fluido e mais coerente com a marca.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>01</span>
              <h3>Fast deployment</h3>
              <p>Entramos com um escopo enxuto e começamos a operar sem criar uma obra infinita.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>02</span>
              <h3>Priced for small business</h3>
              <p>Uma estrutura simples para começar sem virar um projeto grande demais para o estágio do negócio.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>03</span>
              <h3>Built to last</h3>
              <p>O fluxo cresce com a operação, sem depender de truques visuais ou promessas vagas.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>04</span>
              <h3>Local first</h3>
              <p>Tom, contexto e língua alinhados ao jeito brasileiro de atender e vender.</p>
            </div>
          </div>

          <div className={styles.includedShell}>
            <div className={styles.includedIntro}>
              <span className={styles.kicker}>What’s included</span>
              <h3>O que entra no pacote.</h3>
              <p>
                Um bloco direto, com foco no que realmente importa para colocar a IA para trabalhar no seu atendimento.
              </p>
            </div>

            <div className={styles.includedContent}>
              <div className={styles.includedList}>
                {included.map((item, index) => (
                  <div key={item} className={styles.includedItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className={styles.includedNote}>
                <strong>AI Assistente</strong>
                <p>
                  A experiência é editorial: menos camada desnecessária, mais leitura fácil e mais espaço para o conteúdo respirar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonialSection} id="prova">
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Adafriends</span>
              <h2>
                Poucas frases, pouca pompa.
                <br />
                <em>O suficiente para sentir a diferença.</em>
              </h2>
            </div>
          </div>

          <div className={styles.testimonialRow}>
            {testimonials.map((item) => (
              <figure key={item.name} className={styles.testimonialCard}>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.pricingSection} id="planos">
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Um plano simples, sem surpresas</span>
              <h2>
                Uma oferta única.
                <br />
                <em>Com opção anual ou mensal.</em>
              </h2>
            </div>
            <p>
              Comece com uma base clara e evolua sem trocar de casa. O foco é deixar a IA útil rápido e sem fricção.
            </p>
          </div>

          <div className={styles.billingBar}>
            <span>Plano Único</span>
            <div className={styles.billingToggle} role="tablist" aria-label="Alternar cobrança">
              <button type="button" role="tab" aria-selected={billing === "annual"} onClick={() => setBilling("annual")}>
                Anual 35% OFF
              </button>
              <button type="button" role="tab" aria-selected={billing === "monthly"} onClick={() => setBilling("monthly")}>
                Mensal
              </button>
            </div>
            <a href={primaryHref} className={styles.textLink}>
              Quero começar <ArrowRight size={16} />
            </a>
          </div>

          <div className={styles.pricingGrid}>
            <article className={styles.priceCard}>
              <div className={styles.priceTop}>
                <span className={styles.priceTag}>{pricing.tag}</span>
                <div>
                  <strong>{pricing.price}</strong>
                  <small>{pricing.cadence}</small>
                </div>
              </div>

              <h3>AI Assistente para atendimento com contexto</h3>
              <p>{pricing.note}</p>

              <ul>
                {planBullets.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.priceFooter}>
                <a href={primaryHref} className={styles.darkButton}>
                  Começar agora <ArrowRight size={16} />
                </a>
                <span>Inclui onboarding leve e ajustes iniciais.</span>
              </div>
            </article>

            <aside className={styles.includedPanelAlt}>
              <h3>O que está incluso?</h3>
              <div>
                {included.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Want to see where things are slipping through?</span>
              <h2>
                Se quiser, a gente já começa pelo que está vazando.
                <br />
                <em>Sem enrolar.</em>
              </h2>
            </div>
            <p>
              Se a leitura do seu fluxo for boa, o primeiro desenho fica mais simples do que parece. Pode deixar seu contexto aqui.
            </p>
          </div>

          <div className={styles.formShell}>
            <form className={styles.form}>
              <div className={styles.formGridTwo}>
                <label>
                  <span>Nome *</span>
                  <input type="text" placeholder="Jane" required />
                </label>
                <label>
                  <span>Sobrenome *</span>
                  <input type="text" placeholder="Smith" required />
                </label>
              </div>

              <label>
                <span>Nome da empresa *</span>
                <input type="text" placeholder="Sua empresa" required />
              </label>

              <div className={styles.formGridTwo}>
                <label>
                  <span>E-mail *</span>
                  <input type="email" placeholder="jane@empresa.com" required />
                </label>
                <label>
                  <span>Telefone</span>
                  <input type="tel" placeholder="(11) 99999-9999" />
                </label>
              </div>

              <label>
                <span>O que você quer resolver? *</span>
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione um serviço...
                  </option>
                  <option>Dúvidas recorrentes</option>
                  <option>Agendamento</option>
                  <option>Triagem com contexto</option>
                  <option>Leads qualificados</option>
                  <option>Não tenho certeza ainda</option>
                </select>
              </label>

              <label>
                <span>Me conta sobre a operação</span>
                <textarea placeholder="O que sua empresa faz e onde a conversa está travando hoje?" rows={5} />
              </label>

              <label className={styles.consent}>
                <input type="checkbox" />
                <span>
                  Concordo em receber contato da AI Assistente sobre a minha solicitação. Dados podem ser usados apenas para retorno e acompanhamento.
                </span>
              </label>

              <button type="submit" className={styles.submitButton}>
                Enviar minha solicitação <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Dúvidas frequentes</span>
              <h2>
                Antes de começar,
                <br />
                <em>vale alinhar o básico.</em>
              </h2>
            </div>
            <a href={supportHref} className={styles.textLink}>
              Falar com a equipe <ArrowRight size={16} />
            </a>
          </div>

          <div className={styles.faqList}>
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  {question}
                  <ChevronDown size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <Logo />
          <p>Atendimento inteligente, com toque humano.</p>
        </div>
        <div>
          <b>Produto</b>
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#planos">Planos</a>
        </div>
        <div>
          <b>Confiança</b>
          <a href="#prova">Prova social</a>
          <a href="#por-que">O que inclui</a>
          <a href="#inicio">Topo</a>
        </div>
        <div>
          <b>Começar</b>
          <a href={primaryHref}>Criar conta</a>
          <a href={supportHref}>Falar com a equipe</a>
        </div>
        <small>© {new Date().getFullYear()} aiassistente.com.br. Todos os direitos reservados.</small>
      </footer>
    </div>
  );
}
