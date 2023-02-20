import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';



const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Trey Portfolio</title>
      </Head>

        <Header/>

        {/*Hero*/}
        <section id="hero" className="snap-center">
        <Hero/>
        </section>

        {/*About*/}
        <section id="about" className="snap-start">
            <About/>
        </section>
        {/*Projects*/}
        <section id="projects" className="snap-start">
            <Projects/>
        </section>

        {/*Skills*/}
        {/*<section id="skills" className="snap-start">*/}
        {/*    <Skills/>*/}
        {/*</section>*/}
        {/*Experience*/}

        {/*Contact Me*/}
        <section id="contact" className="snap-start">
        <ContactMe/>
        </section>
    </div>
  )
}

export default Home;