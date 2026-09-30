// TODO: substituir pelo número real da Valozzi (formato internacional, só dígitos).
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Valozzi. Quero entender minha estratégia patrimonial.";

export const POS_DIAGNOSTICO_MESSAGE =
  "Olá, Valozzi. Acabei de realizar o Diagnóstico Patrimonial e gostaria de conversar sobre uma estratégia de consórcio para o meu objetivo.";
