import type { Metadata } from "next";
import V2Landing from "@/components/v2/V2Landing";

export const metadata: Metadata = {
  title: "AI Assistente — atendimento editorial com handoff humano",
  description:
    "Atendimento elegante e simples com IA + repasse humano: base de conhecimento, agendamento, leads e conversa com contexto.",
};

export default function V2Page() {
  return <V2Landing />;
}
