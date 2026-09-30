import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Conteúdos | Valozzi",
  description:
    "Antes de tomar uma decisão, entenda a estratégia. Conteúdos educativos sobre consórcio, alavancagem e planejamento patrimonial.",
};

const ARTICLES = [
  {
    title: "Consórcio é investimento?",
    description:
      "Entenda a diferença entre adquirir crédito e investir diretamente em um ativo.",
  },
  {
    title: "Consórcio ou financiamento?",
    description:
      "Conheça as características, custos, prazos e condições que devem ser analisados.",
  },
  {
    title: "Como funciona a contemplação?",
    description: "Entenda sorteio, lance e as regras previstas no contrato.",
  },
  {
    title: "O que é alavancagem patrimonial?",
    description:
      "Como capital, crédito, ativos e planejamento podem entrar na mesma estratégia.",
  },
  {
    title: "O reajuste da parcela é um problema?",
    description:
      "Entenda por que o reajuste precisa fazer parte da análise antes da contratação.",
  },
  {
    title: "Como pensar patrimônio em 5 anos?",
    description: "Planejamento, disciplina e decisões coerentes ao longo do tempo.",
  },
  {
    title: "Como utilizar consórcio para comprar um imóvel?",
    description:
      "O passo a passo de como a modalidade se aplica à aquisição de imóveis.",
  },
  {
    title: "Como começar a construir patrimônio?",
    description:
      "Primeiros passos para sair do capital parado e entrar numa estratégia patrimonial.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Conteúdos"
          title="Antes de tomar uma decisão, entenda a estratégia."
        />

        <section className="bg-valozzi-offwhite py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {ARTICLES.map((article) => (
                <StaggerItem key={article.title}>
                  <article>
                    <h2 className="font-serif text-xl">{article.title}</h2>
                    <p className="mt-3 text-sm text-valozzi-black/60">
                      {article.description}
                    </p>
                    {/* TODO: conteúdo completo do artigo — reaproveitar/adaptar
                       material já publicado no Instagram da Valozzi. */}
                    <span className="mt-4 inline-block text-xs tracking-[0.2em] uppercase text-valozzi-gold/60">
                      Em breve
                    </span>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
