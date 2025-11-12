import Loader from "./components/Loader"
import Divider from "./components/divider/Divider"
import { Navbar, Hero, Projects } from "./components"
export default function Home() {
  return (
    <Loader>
      <Navbar />
      <main>
        <Hero />
        <Divider/>
        <Projects />
      </main>
    </Loader>
  )
}