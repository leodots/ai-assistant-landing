import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Assistente — Atendimento com IA + handoff humano",
  description:
    "Sua IA aprende com seus documentos, responde nos seus canais e devolve para o time quando importar. Em produção em 1 dia.",
  metadataBase: new URL("https://aiassistente.com.br"),
  openGraph: {
    title: "AI Assistente",
    description:
      "Conhecimento que vira atendimento, em minutos. Atendimento com IA + handoff humano para WhatsApp, Telegram, e-mail e site.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfbf9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
