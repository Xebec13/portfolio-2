import { Navbar, Hero, Projects, About, Footer } from "./components"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <div className="relative min-h-screen">
        {/* Sticky About */}
        <div className="sticky top-0 z-10">
          <About />
        </div>

        {/* Footer wchodzi nad About */}
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </>
  )
}