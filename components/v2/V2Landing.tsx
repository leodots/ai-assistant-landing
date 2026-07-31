"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  Menu,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import styles from "./v2.module.css";

const primaryHref = "https://aiassistente.com.br";
const supportHref = "mailto:contato@aiassistente.com.br";

const quickNeeds = [
  {
    icon: MessageCircleMore,
    title: "Dúvidas recorrentes",
    text: "Responda perguntas repetidas com consistência, sem prender o time no básico.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "Colete dados, confirme horários e leve o usuário para o próximo passo sem quebrar a conversa.",
  },
  {
    icon: Headphones,
    title: "Triagem com contexto",
    text: "Quando o caso pede cuidado humano, a IA chama alguém da equipe com o histórico pronto.",
  },
  {
    icon: Users,
    title: "Leads qualificados",
    text: "Transforme conversa em oportunidade com contexto, tags e próximo passo claro.",
  },
  {
    icon: ShieldCheck,
    title: "Controle da operação",
    text: "Separe conhecimento, acesso e comportamento por operação com uma camada mais segura.",
  },
];

const features = [
  "Base de conhecimento conectada",
  "Handoff humano com contexto",
  "WhatsApp e web no mesmo fluxo",
  "LGPD e separação por operação",
];

const workflow = [
  {
    number: "01",
    title: "Conecte a fonte",
    text: "Importe documentos, páginas e regras para que a resposta comece no lugar certo.",
  },
  {
    number: "02",
    title: "Defina o tom",
    text: "Ajuste linguagem, limites e gatilhos de repasse para a IA agir com precisão.",
  },
  {
    number: "03",
    title: "Publique e refine",
    text: "Acompanhe as conversas reais e melhore o fluxo com dados do dia a dia.",
  },
];

const testimonials = [
  {
    quote:
      "O atendimento ficou mais sereno. A IA resolve o básico e o time entra quando existe nuance, urgência ou decisão.",
    role: "Coordenação de atendimento",
    segment: "Operações com alto volume",
  },
  {
    quote:
      "Parece menos um chatbot e mais uma experiência editorial: clara, leve e muito mais coerente com a marca.",
    role: "Marketing e experiência",
    segment: "Serviços e saúde",
  },
  {
    quote:
      "A conversa não se perde quando passa para alguém da equipe. O histórico chega pronto e o cliente percebe o cuidado.",
    role: "Operações comerciais",
    segment: "Captação e conversão",
  },
];

const planFeatures = [
  "Assistente com sua base de conhecimento",
  "Fluxo de handoff humano com contexto",
  "Agendamento, captação e qualificação",
  "Ajustes leves para entrar no ar rápido",
];

const faqs = [
  [
    "A IA responde com a minha própria base?",
    "Sim. Você conecta o conteúdo da operação e define referências para que as respostas saiam do contexto do seu negócio.",
  ],
  [
    "Quando a conversa vai para uma pessoa?",
    "Você define os gatilhos: pedido explícito, tema sensível, baixa confiança ou qualquer regra da operação.",
  ],
  [
    "Consigo capturar leads e agendar horários?",
    "Sim. O fluxo pode qualificar interesse, coletar dados e avançar para agendamento sem interromper a conversa.",
  ],
  [
    "Como ficam segurança e LGPD?",
    "A plataforma foi pensada para separar operações, controlar acessos e manter uma postura compatível com esse cuidado.",
  ],
  [
    "Preciso falar com vendas para testar?",
    "Não necessariamente. A jornada é leve e você consegue conhecer, configurar e evoluir a operação sem fricção.",
  ],
];

function Logo() {
  return (
    <Link href="/v2" className={styles.logo} aria-label="AI Assistente — início">
      <span className={styles.logoMark}>
        <Sparkles size={16} />
      </span>
      <span>
        ai<span>assistente</span>
      </span>
    </Link>
  );
}

function PreviewCard() {
  return (
    <section className={styles.previewCard} aria-label="Exemplo de conversa com handoff humano">
      <div className={styles.previewTop}>
        <div className={styles.previewIdentity}>
          <span className={styles.previewAvatar}>
            <Bot size={18} />
          </span>
          <div>
            <strong>Assistente da operação</strong>
            <span>
              <i /> Online no WhatsApp
            </span>
          </div>
        </div>
        <div className={styles.previewSecure}>
          <BadgeCheck size={13} />
          Handoff seguro
        </div>
      </div>

      <div className={styles.previewBody}>
        <div className={styles.previewDate}>Hoje</div>
        <div className={`${styles.previewMessage} ${styles.previewClient}`}>
          <p>Oi! Vocês atendem pelo WhatsApp e conseguem agendar?</p>
          <time>09:41</time>
        </div>
        <div className={styles.previewMessage}>
          <p>
            Sim — posso responder as dúvidas iniciais, checar a disponibilidade e passar para alguém do time se você preferir.
          </p>
          <time>09:41</time>
        </div>
        <div className={`${styles.previewMessage} ${styles.previewHuman}`}>
          <span>Marina • humano</span>
          <p>Perfeito. Assumi a conversa com o histórico e já posso te orientar sem que você precise repetir tudo.</p>
          <time>09:42</time>
        </div>
      </div>

      <div className={styles.previewFooter}>
        <span>Digite uma mensagem...</span>
        <button type="button" aria-label="Enviar mensagem">
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default function V2Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  const pricing = useMemo(
    () =>
      billing === "annual"
        ? { label: "Anual 35% OFF", price: "R$ 490", cadence: "/mês", note: "Cobrança anual com desconto e onboarding mais guiado." }
        : { label: "Mensal", price: "R$ 740", cadence: "/mês", note: "Ideal para começar com flexibilidade e sem compromisso longo." },
    [billing],
  );

  return (
    <div id="v2-page" className={styles.v2Page}>
      <div className={styles.bgGlow} aria-hidden="true">
        <i />
        <i />
      </div>
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Navegação principal">
          <Logo />
          <div className={styles.navLinks}>
            <a href="#inicio">Início</a>
            <a href="#rapidos">Do que você precisa agora?</a>
            <a href="#planos">Quanto custa?</a>
            <a href="#prova">Adafriends</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className={styles.navActions}>
            <a href={supportHref} className={styles.navGhost}>
              Sou cliente
            </a>
            <a href={primaryHref} className={styles.navCta}>
              Comece agora <ArrowRight size={15} />
            </a>
            <button
              className={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              type="button"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <div className={styles.mobileMenu}>
              <a href="#inicio" onClick={() => setMenuOpen(false)}>
                Início
              </a>
              <a href="#rapidos" onClick={() => setMenuOpen(false)}>
                Do que você precisa agora?
              </a>
              <a href="#planos" onClick={() => setMenuOpen(false)}>
                Quanto custa?
              </a>
              <a href="#prova" onClick={() => setMenuOpen(false)}>
                Adafriends
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>
              <a href={primaryHref} onClick={() => setMenuOpen(false)}>
                Comece agora
              </a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <div className={styles.heroCard}>
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <div className={styles.heroMeta}>
                  <span className={styles.heroRating}>4.9 ★ em operações reais</span>
                  <span className={styles.heroPill}>AI + handoff humano</span>
                </div>

                <h1>
                  Atendimento inteligente
                  <br />
                  para quem precisa de contexto
                </h1>

                <p className={styles.heroLead}>
                  AI Assistente cuida das perguntas repetidas, do agendamento e da qualificação — e chama alguém da equipe quando o cuidado precisa ser humano.
                </p>

                <div className={styles.heroActions}>
                  <a href={primaryHref} className={styles.primaryButton}>
                    Criar meu assistente <ArrowRight size={18} />
                  </a>
                  <a href="#rapidos" className={styles.secondaryButton}>
                    <MessageCircleMore size={18} />
                    Ver usos rápidos
                  </a>
                </div>

                <div className={styles.heroProofRow}>
                  {features.map((item) => (
                    <span key={item}>
                      <Check size={14} /> {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroVisualLabel}>
                  <Clock3 size={14} /> Responde 24h com o tom da marca
                </div>
                <PreviewCard />
                <div className={styles.heroVisualNote}>
                  <BadgeCheck size={16} /> Marina entrou sem pedir o histórico de novo.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection} id="rapidos">
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
              Pense em um caminho simples para os pedidos que mais chegam: dúvidas, agendamento, triagem, qualificação e repasse humano.
            </p>
          </div>

          <div className={styles.quickRail}>
            {quickNeeds.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.quickCard}>
                <div className={styles.quickIcon}>
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={primaryHref} className={styles.quickLink}>
                  Ver exemplo <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.testimonialBand} id="prova">
          <div className={styles.testimonialIntro}>
            <span className={styles.kicker}>#aiassistente</span>
            <p>O que mais aparece quando o atendimento fica mais claro é uma palavra só: tranquilidade.</p>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <figure key={item.role} className={styles.testimonialCard}>
                <MessageCircleMore size={20} />
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <span>{item.role}</span>
                  <small>{item.segment}</small>
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
                Resolvemos toda a jornada da sua operação.
                <br />
                <em>Sem cobrar o que parece extra.</em>
              </h2>
            </div>
            <p>
              Comece com uma base clara e evolua sem trocar de casa. O foco é deixar a IA útil rápido, com possibilidade de ampliar depois.
            </p>
          </div>

          <div className={styles.planBar}>
            <span>Plano Único</span>
            <div className={styles.planTabs} role="tablist" aria-label="Alternar cobrança">
              <button type="button" role="tab" aria-selected={billing === "annual"} onClick={() => setBilling("annual")}>
                Anual 35% OFF
              </button>
              <button type="button" role="tab" aria-selected={billing === "monthly"} onClick={() => setBilling("monthly")}>
                Mensal
              </button>
            </div>
            <a href={primaryHref} className={styles.planCta}>
              Quero assinar
            </a>
          </div>

          <div className={styles.pricingGrid}>
            <article className={styles.pricePanel}>
              <div className={styles.pricePanelTop}>
                <span className={styles.planBadge}>{pricing.label}</span>
                <div>
                  <strong>{pricing.price}</strong>
                  <small>{pricing.cadence}</small>
                </div>
              </div>
              <h3>AI Assistente para atendimento com contexto</h3>
              <p>{pricing.note}</p>
              <ul>
                {planFeatures.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.pricePanelFooter}>
                <a href={primaryHref} className={styles.primaryButton}>
                  Começar agora <ArrowRight size={16} />
                </a>
                <span>Inclui onboarding leve e ajustes iniciais.</span>
              </div>
            </article>

            <article className={styles.includedPanel}>
              <h3>O que está incluso?</h3>
              <div className={styles.includedList}>
                <div>
                  <span>01</span>
                  <p>Base de conhecimento conectada e organizada para respostas consistentes.</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Handoff humano com contexto para casos que exigem empatia e decisão.</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Agendamento, triagem e qualificação no mesmo fluxo de conversa.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.allInOneSection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>All-in-One</span>
              <h2>
                Uma operação só.
                <br />
                <em>Com o tom da sua marca.</em>
              </h2>
            </div>
            <a href={primaryHref} className={styles.textLink}>
              Compare e faça a conta <ArrowRight size={16} />
            </a>
          </div>

          <article className={styles.workflowShell}>
            <div className={styles.workflowGrid}>
              {workflow.map((step) => (
                <article key={step.number} className={styles.workflowCard}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className={styles.serviceCardsSection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>A gente cuida de toda a rotina</span>
              <h2>
                A IA entra na frente.
                <br />
                <em>O humano entra com mais valor.</em>
              </h2>
            </div>
          </div>
          <div className={styles.serviceCardGrid}>
            {[
              ["Precisa responder rápido", "A IA cobre o primeiro nível com consistência e sem cansar o time."],
              ["Precisa agendar", "Coleta dados, direciona o usuário e evita perda de contexto."],
              ["Precisa qualificar", "Captura intenção, prioridade e próximos passos com clareza."],
              ["Precisa de repasse humano", "A conversa chega para a equipe pronta para continuar."],
            ].map(([title, text]) => (
              <article key={title} className={styles.serviceCard}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.logoProofSection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>A preferida de quem trabalha com tecnologia</span>
              <h2>
                Mais clareza para o time.
                <br />
                <em>Mais calma para quem chama.</em>
              </h2>
            </div>
            <a href={supportHref} className={styles.textLink}>
              Falar com a equipe agora <ArrowRight size={16} />
            </a>
          </div>
          <div className={styles.logoStrip} aria-label="Marcas e prova social">
            {[
              "Northwind",
              "FactorEd",
              "Lumenalta",
              "Toptal",
              "Blue Ridge",
              "Signal Labs",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className={styles.statsSection} aria-label="Resultados resumidos">
          <div className={styles.statsStrip}>
            <span>+30%</span>
            <p>de atendimentos encaminhados sem repetição</p>
            <span>+90.000</span>
            <p>mensagens organizadas com contexto</p>
            <span>4.9/5</span>
            <p>percepção de clareza na jornada</p>
          </div>
        </section>

        <section className={styles.demoSection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Sua operação, do jeito que você precisa</span>
              <h2>
                Uma experiência mais limpa.
                <br />
                <em>Sem ruído e sem excesso.</em>
              </h2>
            </div>
            <p>
              A interface privilegia conteúdo, ritmo e leitura — como uma página editorial, não como um painel barulhento.
            </p>
          </div>
          <div className={styles.demoPanel}>
            <div className={styles.demoSidebar}>
              <div>
                <strong>Hoje</strong>
                <span>09:41 · WhatsApp</span>
              </div>
              <div>
                <strong>Marina</strong>
                <span>Humano entrou com contexto</span>
              </div>
              <div>
                <strong>Assistente</strong>
                <span>Respondeu o básico e qualificou</span>
              </div>
            </div>
            <div className={styles.demoCanvas}>
              <div className={styles.demoConversation}>
                <div className={styles.demoBubbleClient}>Vocês conseguem atender pelo WhatsApp e agendar?</div>
                <div className={styles.demoBubbleBot}>
                  Sim — consigo responder as dúvidas iniciais, checar disponibilidade e entregar o histórico para o time quando necessário.
                </div>
                <div className={styles.demoBubbleHuman}>
                  Perfeito. Assumi a conversa com o contexto pronto e posso te orientar sem repetição.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.securitySection}>
          <div className={styles.sectionHeadingSingle}>
            <div>
              <span className={styles.kicker}>Seu atendimento seguro e em dia</span>
              <h2>
                Clareza para operar.
                <br />
                <em>Confiança para escalar.</em>
              </h2>
            </div>
            <a href={primaryHref} className={styles.textLink}>
              Ver tudo funcionando <ArrowRight size={16} />
            </a>
          </div>
          <div className={styles.securityGrid}>
            <div className={styles.securityCard}>
              <BadgeCheck size={20} />
              <h3>Handoff sem perda de contexto</h3>
              <p>O humano entra com o histórico organizado e continua de onde a IA parou.</p>
            </div>
            <div className={styles.securityHero}>
              <div className={styles.securityAccent} />
              <div className={styles.securityMock}>
                <span>AI Assistente</span>
                <strong>Seu CNPJ seguro e em dia</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.faqIntro}>
            <span className={styles.kicker}>Dúvidas Frequentes</span>
            <h2>
              Antes de começar,
              <br />
              <em>vale alinhar o básico.</em>
            </h2>
            <p>Se você não encontrar sua resposta aqui, fale com a equipe e entenda como encaixar a solução na sua rotina.</p>
            <a href={supportHref} className={styles.textLink}>
              Fale com a gente <ArrowRight size={16} />
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

        <section className={styles.finalCta}>
          <div className={styles.finalCtaBackdrop} aria-hidden="true" />
          <span className={styles.kicker}>Ainda tem dúvidas?</span>
          <h2>
            A IA abre a conversa.
            <br />
            <em>Seu time aprofunda a relação.</em>
          </h2>
          <p>
            Coloque seu conhecimento para atender, seus leads para avançar e sua equipe para entrar quando realmente fizer diferença.
          </p>
          <div className={styles.heroActions}>
            <a href={primaryHref} className={styles.primaryButton}>
              Criar meu assistente <ArrowRight size={18} />
            </a>
            <a href={supportHref} className={styles.secondaryButton}>
              <Clock3 size={18} />
              Falar com a gente
            </a>
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
          <a href="#rapidos">Casos rápidos</a>
          <a href="#planos">Planos</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <b>Confiança</b>
          <a href="#prova">Prova social</a>
          <a href="#planos">Preço e estrutura</a>
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
