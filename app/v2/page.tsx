import type { Metadata } from "next";
import V2Landing from "@/components/v2/V2Landing";

export const metadata: Metadata = {
  title: "AI Assistente — atendimento editorial com IA + handoff humano",
  description:
    "Landing /v2 inspirada em uma linguagem editorial premium: IA para dúvidas, agendamento, qualificação e repasse humano com contexto.",
};

export default function V2Page() {
  return <V2Landing />;
}
