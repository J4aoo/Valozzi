import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { CtaLink } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Consórcio de Veículo | Valozzi",
  description:
    "Consórcio de veículo dentro de uma estratégia financeira mais ampla, para quem já pensa em patrimônio de médio e longo prazo.",
};

export default function ConsorcioVeiculoPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Consórcio de Veículo"
          title="Um veículo também pode entrar numa estratégia patrimonial."
          subtitle="A Valozzi tem foco em aquisição de imóveis e construção de patrimônio — o consórcio de veículo é analisado como parte secundária de uma estratégia mais ampla, não como produto isolado."
        >
          <div className="mt-10">
            <CtaLink href="/contato">Falar com especialista</CtaLink>
          </div>
        </PageHero>

        <section className="vars-dark surface-dark py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-[12px] leading-relaxed text-subtle">
            O consórcio é uma modalidade de autofinanciamento (Lei nº
            11.795/2008). Não há garantia de contemplação, rentabilidade ou
            retorno em prazo determinado.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
