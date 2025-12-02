import { Navbar, Hero, Projects, About, Footer } from "./components"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />

      {/* Kontener Layoutu */}
      <div className="relative w-full">
        <span id="about" className="absolute top-0 left-0 w-full h-1" />
        <div className="relative z-10 top-0">
          <About />
        </div>
        <div className="sticky bottom-0 left-0 w-full z-0">
          <Footer />
        </div>
      </div>
    </>
  )
}