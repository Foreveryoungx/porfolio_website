import React from 'react';
import {motion} from 'framer-motion';


type Props = {};
export default function About({}: Props) {

    return (
        <div className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly nmx-auto items-center">
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>
                About
            </h3>

            <motion.img
                initial={{
                    x:-200,
                    opacity:0
            }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x:0
                }}
                viewport={{once: true}}
                src="https://res.cloudinary.com/dvfdkfitt/image/upload/v1676901197/1660612160481_hg08ko.jpg"
                className = {"-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"}
                />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className={"text-4xl font-semibold"}>
                    Here is a <span className={"underline decoration-[#F7AB0A]/50"}>little</span> background
                </h4>
                <p className={"text-base"}>
                    Im Trey.😃  I am a driven and multi-talented individual with a deep passion for coding, bowling, gaming, and watching movies.
                    I love to explore new coding languages, experiment with new coding projects, and get a group of friends together for a night of bowling and video gaming.
                    In my free time, you can catch me watching movies and catching up on the latest TV series.
                    I also take pride in being active in my community and enjoy giving back through volunteering and participating in local events.
                    Despite my many interests, I am very family oriented and value my time spent with loved ones above all else.
                    My determination, creativity, and caring nature make me a standout individual in any setting.
                </p>
            </div>
        </div>
    );
};