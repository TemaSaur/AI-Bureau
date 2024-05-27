import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Points from "@/components/Points";
import HowWorks from "@/components/HowWorks";
import Plans from '@/components/Plans';
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


export default function Home() {
  return <>
    <Header />
    <main className="">
      <Hero />
      <Points />
      <HowWorks />
      <Plans />
      <FAQ />
    </main>
    <Footer />
  </>
}
