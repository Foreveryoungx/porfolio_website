import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Link from "next/link";
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageinfo";
import { fetchExperiences } from "../utils/fecthExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Skills from "../components/Skills";

type Props = {
  experiences: Experience[];
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo.name} Portfolio</title>
      </Head>

      <Header socials={socials} />

      {/*Hero*/}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/*About*/}
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      {/*Projects*/}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/*Skills*/}

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/*WorkExperience*/}

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/*Contact Me*/}

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href={"#hero"}>
        <footer className={"sticky bottom-5 w-full cursor-pointer"}>
          <div>
            <img
              className={
                "h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              }
              src={
                "https://res.cloudinary.com/dvfdkfitt/image/upload/v1676989153/pngtree-vector-up-arrow-icon-png-image_956434_vsm69t.jpg"
              }
              alt={"up arrow to go to the top of the page"}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 second
    revalidate: 1, // In seconds
  };
};
