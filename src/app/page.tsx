import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { QuebraParadigma } from "@/components/sections/QuebraParadigma";
import { Posicionamento } from "@/components/sections/Posicionamento";
import { OndeQuerChegar } from "@/components/sections/OndeQuerChegar";
import { AlavancagemPatrimonial } from "@/components/sections/AlavancagemPatrimonial";
import { ComoTrabalha } from "@/components/sections/ComoTrabalha";
import { PerfilValozzi } from "@/components/sections/PerfilValozzi";
import { ESe } from "@/components/sections/ESe";
import { DiagnosticoForm } from "@/components/sections/DiagnosticoForm";
import { ProvaSocial } from "@/components/sections/ProvaSocial";
import { Conteudo } from "@/components/sections/Conteudo";
import { SobreValozzi } from "@/components/sections/SobreValozzi";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuebraParadigma />
        <Posicionamento />
        <OndeQuerChegar />
        <AlavancagemPatrimonial />
        <ComoTrabalha />
        <PerfilValozzi />
        <ESe />
        <DiagnosticoForm />
        <ProvaSocial />
        <Conteudo />
        <SobreValozzi />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
