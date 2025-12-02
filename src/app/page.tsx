import { Navbar, Hero, Projects, About, Footer } from "./components"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/* Kontener Layoutu */}
      <div className="relative w-full">
        <div className="relative z-10 bg-zinc-200 lg:sticky lg:top-0">
          <About />
        </div>
        <div className="sticky bottom-0 left-0 w-full z-0 lg:relative lg:z-20">
          <Footer />
        </div>
      </div>
    </>
  )
}