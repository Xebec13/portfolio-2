import Loader from "./components/Loader"
import { Navbar, Hero, Projects } from "./components"
export default function Home() {
  return (
    <Loader>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </Loader>
  )
}