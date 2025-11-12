import Loader from "./components/Loader"
import Divider from "./components/divider/Divider"
import { Navbar, Hero, Projects,Footer } from "./components"
export default function Home() {
  return (
    <Loader>
      <Navbar />
      <main>
        <Hero />
        <Divider/>
        <Projects />
      </main>
      <Footer/>
    </Loader>
  )
}