import "./Portfolio.css";
import Header from "./components/header";
import Presentation from "./components/presentation";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <section className="bg-gray-50">
      <Header />
      <main>
        <Presentation />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <footer></footer>
    </section>
  );
}

export default App;
