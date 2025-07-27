import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Differentials } from "@/components/differentials"
import { Resources } from "@/components/resources"
import { Footer } from "@/components/footer"
import { GeometricBackground } from "@/components/geometric-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <GeometricBackground />
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Resources />
      <Footer />
    </main>
  )
}
