import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { DiagnosticoForm } from "@/components/sections/DiagnosticoForm";
import { CtaLink } from "@/components/ui/CtaButton";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato | Valozzi",
  description:
    "Fale com um especialista Valozzi pelo WhatsApp ou faça o Diagnóstico Patrimonial para entender qual estratégia faz sentido para o seu momento.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contato"
          title="Fale diretamente com um especialista Valozzi."
          subtitle="Atendimento personalizado pelo WhatsApp — sem formulários burocráticos, sem espera."
        >
          <div className="mt-10">
            <CtaLink href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}>
              Abrir WhatsApp
            </CtaLink>
          </div>
        </PageHero>

        <DiagnosticoForm />

        <section className="vars-light surface-light py-16">
          {/* TODO: incluir CNPJ, registro na administradora de consórcio,
             endereço e canal oficial de ouvidoria antes de publicar. */}
          <div className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-[15px] text-muted space-y-1">
            <p>Valozzi Investimentos</p>
            <p>Atendimento via WhatsApp e Instagram.</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
