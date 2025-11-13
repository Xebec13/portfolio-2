import Loader from "./components/Loader"
import Divider from "./components/divider/Divider"
import { Navbar, Hero, Projects, About, Footer } from "./components"
export default function Home() {
  return (
    <Loader>
      <Navbar />
      <Hero />
      <Divider />
      <Projects />
      <div className="relative">
        <div className="sticky top-0 right-0">
          <About />
        </div>
        <div className="sticky top-0">
          <Footer />
        </div>
      </div>
    </Loader>
  )
}