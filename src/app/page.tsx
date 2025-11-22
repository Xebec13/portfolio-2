import Loader from "./components/Loader"
import { Navbar, Hero, Projects, About, Footer } from "./components"
export default function Home() {
  return (
    // <Loader>
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
    // </Loader>
  )
}