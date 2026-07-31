"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import styles from "./v2.module.css";

const primaryHref = "https://aiassistente.com.br";

const proofPills = [
  "Base de conhecimento conectada",
  "Handoff humano com contexto",
  "WhatsApp e web no mesmo fluxo",
  "LGPD e separação por operação",
];

const quickNeeds = [
  {
    icon: MessageCircleMore,
    title: "Dúvidas recorrentes",
    text: "Responda perguntas repetidas com tom consistente, sem deixar a equipe presa no básico.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "Colete dados, consulte horários e encaminhe o próximo passo dentro da própria conversa.",
  },
  {
    icon: Headphones,
    title: "Triagem sensível",
    text: "Quando o caso pede cuidado humano, a IA chama alguém da equipe sem quebrar o ritmo.",
  },
  {
    icon: Users,
    title: "Leads qualificados",
    text: "Transforme conversa em oportunidade com contexto, tags e próximo passo claro.",
  },
  {
    icon: ShieldCheck,
    title: "Controle da operação",
    text: "Separe conhecimento, acesso e comportamento por operação, com uma camada mais segura.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Conecte a fonte",
    text: "Importe conteúdo, páginas e regras para que a resposta comece no lugar certo.",
  },
  {
    number: "02",
    title: "Defina o tom",
    text: "Ajuste limites, linguagem e gatilhos de repasse para a IA agir com precisão.",
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
      "Pareceu menos um chatbot e mais uma experiência editorial: clara, leve e muito mais coerente com a marca.",
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

const plans = [
  {
    name: "Essencial",
    label: "Para começar",
    description: "Uma base simples para colocar o atendimento inteligente no ar com rapidez.",
    items: ["Assistente com sua base", "Fluxo de handoff humano", "Configuração self-service"],
    accent: false,
  },
  {
    name: "Equipe",
    label: "Mais escolhido",
    description: "Para operações que precisam de agendamento, qualificação e mais controle.",
    items: ["Tudo do Essencial", "Agendamentos e roteamento", "Mais integrações e volume"],
    accent: true,
  },
  {
    name: "Operação",
    label: "Para escalar",
    description: "Voltado para múltiplos fluxos, governança e acompanhamento mais próximo.",
    items: ["Tudo do Equipe", "Estrutura multi-operação", "Suporte prioritário"],
    accent: false,
  },
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

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      className={styles.iconButton}
      aria-label="Alternar tema"
      onClick={() => mounted && setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function ConversationPreview() {
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
          <ShieldCheck size={13} />
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
          <p>
            Perfeito. Assumi a conversa com o histórico e já posso te orientar sem que você precise repetir tudo.
          </p>
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
            <a href="#casos">Casos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#prova">Prova social</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className={styles.navActions}>
            <ThemeButton />
            <a href={primaryHref} className={styles.navCta}>
              Falar com a equipe <ArrowRight size={15} />
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
              <a href="#casos" onClick={() => setMenuOpen(false)}>
                Casos
              </a>
              <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
                Como funciona
              </a>
              <a href="#prova" onClick={() => setMenuOpen(false)}>
                Prova social
              </a>
              <a href="#planos" onClick={() => setMenuOpen(false)}>
                Planos
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>
              <a href={primaryHref}>Falar com a equipe</a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <span className={styles.socialChip}>
                <BadgeCheck size={14} />
                Experiência 4,9/5 em atendimento
              </span>
              <span className={styles.heroTag}>AI + handoff humano</span>
            </div>

            <h1>
              Atendimento mais calmo.
              <br />
              <em>Mais claro. Mais humano.</em>
            </h1>

            <p className={styles.heroLead}>
              AI Assistente transforma sua base, sua agenda e sua equipe em uma jornada única: a IA resolve o básico e chama uma pessoa quando o cuidado precisa ser humano.
            </p>

            <div className={styles.heroActions}>
              <a href={primaryHref} className={styles.primaryButton}>
                Criar meu assistente <ArrowRight size={18} />
              </a>
              <a href="#casos" className={styles.secondaryButton}>
                <MessageCircleMore size={18} />
                Ver usos rápidos
              </a>
            </div>

            <div className={styles.heroProofRow}>
              <span>
                <Check size={14} /> WhatsApp e web
              </span>
              <span>
                <Check size={14} /> Base própria
              </span>
              <span>
                <Check size={14} /> Handoff com contexto
              </span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroVisualLabel}>
              <Clock3 size={14} /> Responde 24h com o tom da marca
            </div>
            <ConversationPreview />
            <div className={styles.heroVisualNote}>
              <BadgeCheck size={16} /> Marina entrou sem pedir o histórico de novo.
            </div>
          </div>
        </section>

        <section className={styles.proofBand} aria-label="Resumo da proposta">
          <p>Uma operação contínua, do primeiro “oi” à resolução, com cuidado humano no momento certo.</p>
          <div className={styles.proofRow}>
            {proofPills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className={styles.section} id="casos">
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Casos rápidos</span>
            <h2>
              Resolva os fluxos mais comuns.
              <br />
              <em>Sem perder a elegância.</em>
            </h2>
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
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.workflowSection}`} id="como-funciona">
          <div className={styles.sectionIntroRow}>
            <div>
              <span className={styles.kicker}>Como funciona</span>
              <h2>
                Comece simples.
                <br />
                <em>Evolua com a conversa real.</em>
              </h2>
            </div>
            <p>
              A experiência foi desenhada para ficar leve para o usuário e previsível para a operação — sem camadas desnecessárias.
            </p>
          </div>

          <div className={styles.workflowGrid}>
            {workflow.map((step) => (
              <article key={step.number} className={styles.workflowCard}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.testimonialSection}`} id="prova">
          <div className={styles.sectionIntroRow}>
            <div>
              <span className={styles.kicker}>Prova social</span>
              <h2>
                Menos repetição.
                <br />
                <em>Mais espaço para o humano.</em>
              </h2>
            </div>
            <p>
              O ganho aparece quando o time deixa de responder sempre a mesma coisa e volta a cuidar de casos que realmente exigem atenção.
            </p>
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

        <section className={`${styles.section} ${styles.pricingSection}`} id="planos">
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Planos simples</span>
            <h2>
              Comece sem fricção.
              <br />
              <em>E escale sem trocar de casa.</em>
            </h2>
            <p>
              A lógica é direta: escolha um ponto de partida leve e evolua conforme sua operação ganha volume e maturidade.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {plans.map((plan) => (
              <article key={plan.name} className={`${styles.planCard} ${plan.accent ? styles.planFeatured : ""}`}>
                <span className={styles.planLabel}>{plan.label}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.planFooter}>
                  <div className={styles.planPrice}>
                    <strong>Planos flexíveis</strong>
                    <small>Veja o valor adequado ao seu momento</small>
                  </div>
                  <a href={primaryHref} className={plan.accent ? styles.planButtonFeatured : styles.planButton}>
                    Conhecer {plan.name.toLowerCase()} <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq">
          <div className={styles.faqIntro}>
            <span className={styles.kicker}>FAQ</span>
            <h2>
              Antes de começar,
              <br />
              <em>vale alinhar o básico.</em>
            </h2>
            <p>
              Se você não encontrar sua resposta aqui, fale com a equipe e entenda como encaixar a solução na sua rotina.
            </p>
            <a href={primaryHref} className={styles.textLink}>
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

        <section className={styles.finalCta}>
          <div className={styles.ctaBackdrop} aria-hidden="true" />
          <span className={styles.kicker}>Pronto para um próximo nível mais simples?</span>
          <h2>
            A IA abre a conversa.
            <br />
            <em>Seu time aprofunda a relação.</em>
          </h2>
          <p>
            Coloque seu conhecimento para atender, seus leads para avançar e sua equipe para entrar quando realmente faz diferença.
          </p>
          <div className={styles.heroActions}>
            <a href={primaryHref} className={styles.primaryButton}>
              Criar meu assistente <ArrowRight size={18} />
            </a>
            <a href="#casos" className={styles.secondaryButton}>
              <Clock3 size={18} />
              Revisar os usos
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
          <a href="#casos">Casos rápidos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#planos">Planos</a>
        </div>
        <div>
          <b>Confiança</b>
          <a href="#prova">Prova social</a>
          <a href="#faq">Perguntas frequentes</a>
          <a href="#planos">Preço e estrutura</a>
        </div>
        <div>
          <b>Começar</b>
          <a href={primaryHref}>Criar conta</a>
          <a href={primaryHref}>Falar com a equipe</a>
        </div>
        <small>© {new Date().getFullYear()} aiassistente.com.br. Todos os direitos reservados.</small>
      </footer>
    </div>
  );
}
