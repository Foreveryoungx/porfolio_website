import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

type Props = {}
export default function Projects({}: Props) {
    const projects = [
        {
            id: "1",
            title: "Budget Application",
            description: "Budget Application with React and Local Storage",
            imageUrl: "https://res.cloudinary.com/dvfdkfitt/image/upload/v1672854764/Screenshot_2023-01-04_at_11.51.35_AM_mxxrs2.png",
            imageTitle: "screenshot image of Budget App",
            githubUrl: "https://github.com/Foreveryoungx/Budget_App",
            liveUrl: "https://budget-app-peach.vercel.app/",
            techStack: ["React", "TypeScript", "Chakra UI", "Local Storage"]
        },
        {
            id : "2",
            title: "Gif Search App",
            description: "Search random gifs by query",
            imageUrl : "https://res.cloudinary.com/dvfdkfitt/image/upload/v1676952273/Screenshot_2023-02-20_at_10.04.22_PM_kyybrf.png",
            imageTitle : "screenshot image of Gif App",
            githubUrl : "https://github.com/Foreveryoungx/GIF-Libary-Typescript",
            liveUrl : "https://getsearched.netlify.app/",
            techStack : ["React", "TypeScript", "CSS", "Local Storage"]
        },
        {
            id : "3",
            title: "Node Command Line Search",
            description: "This is an app built to use the Treehouse.com api and search for a user's username it displays their total amount of badges and points. use shell",
            imageUrl : "https://res.cloudinary.com/dvfdkfitt/image/upload/v1675457446/app2_amg4z7.png",
            imageTitle : "screenshot image of Node Command Line Search",
            githubUrl : "https://github.com/Foreveryoungx/Node-Command-Line-Search",
            liveUrl : "https://replit.com/@Foreveryoungx/Node-Command-Line-search#index.js",
            techStack : ["Node.js"]
        }
    ];
    return (
        <div className={"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"}>
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>
                Projects
            </h3>

            <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"}>
                {/*Projects*/}
                {projects.map((project, i) => (
                    <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                            y: -300, opacity: 0
                        }} transition={{duration: 1.2,}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once:true}}
                            src={project.imageUrl} alt={project.imageTitle} />
                        <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
                            <h4 className={"text-4xl font-semibold text-center"}>
                                <span className={"underline decoration-[#F7AB0A]/50"}>
                                    Project {i+1} of {projects.length}:
                                </span>{" "}{project.title}
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                {project.description}
                            </p>
                            <Link target={"_blank"}
                                  href={project.liveUrl}>
                                <button className={"heroButton"}>
                                    Demo
                                </button>
                            </Link>
                            <Link target={"_blank"}
                                  href={project.githubUrl}>
                                <button className={"heroButton"}>
                                    Code
                                </button>
                            </Link>
                        </div>
                     </div>
                    ))}
            </div>
            <div className={"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"}></div>
        </div>
    );
};