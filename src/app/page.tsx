import { Navbar, Hero, Projects, About, Footer } from "./components"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />

      {/* Kontener Layoutu */}
      <div className="relative w-full">
        <span id="about" className="absolute top-0 left-0 w-full h-1 scroll-mt-20" />
        <div className="relative z-10 lg:sticky lg:top-0">
          <About />
        </div>
        <div className="sticky bottom-0 left-0 w-full z-0 lg:relative lg:z-20">
          <Footer />
        </div>
      </div>
    </>
  )
}