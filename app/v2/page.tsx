import type { Metadata } from "next";
import V2Landing from "@/components/v2/V2Landing";

export const metadata: Metadata = {
  title: "AI Assistente — atendimento com IA + handoff humano",
  description:
    "Landing /v2 da AI Assistente com linguagem editorial, foco em atendimento, agendamento, qualificação e repasse humano.",
};

export default function V2Page() {
  return <V2Landing />;
}
