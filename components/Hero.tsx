import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};
export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, my name is Trey Allen",
            "I love everything about technology",
            "As well as being a Life long learner",
            "Forever a student, always a teacher"
        ],
        loop: true,
        delaySpeed: 2000,

    })
    return (
        <div className={"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"}>
            <BackgroundCircles/>
            <img
                className={"relative rounded-full h-32 w-32 mx-auto object-cover"}
                src={"https://res.cloudinary.com/dvfdkfitt/image/upload/v1676901197/1660612160481_hg08ko.jpg"}
                alt={"Image of Trey Allen"}
            />
            <div className={"z-20"}>
            <h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px]"}>
                Software Engineer
            </h2>

            <h1 className={"text-5xl lg:text-6xl font-semibold px-10"}>
                <span className={"mr-3"}>{text}</span>
                <Cursor cursorColor={"#F7AB0A"}/>
            </h1>

            <div className={"pt-5"}>
                <Link href={"#about"}>
                    <button className={"heroButton"}>About</button>
                </Link>
                <Link href={"#skills"}>
                    <button className={"heroButton"}>Skills</button>
                </Link>
                <Link href={"#projects"}>
                    <button className={"heroButton"}>Projects</button>
                </Link>
            </div>
            </div>
        </div>
    );
};
// #014421