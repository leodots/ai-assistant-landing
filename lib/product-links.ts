const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ??
  "https://app.aiassistente.com.br";

export const productLinks = {
  app: appBaseUrl,
  login: `${appBaseUrl}/login`,
  signup: `${appBaseUrl}/auth/google`,
  demo: "#como-funciona",
  sales:
    "mailto:contato@aiassistente.com.br?subject=Quero%20falar%20com%20vendas%20-%20AI%20Assistente",
};
