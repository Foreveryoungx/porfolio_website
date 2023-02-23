import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};
export default function Header({ socials }: Props) {
  return (
    <header
      className={
        "sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"
      }
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={"flex items-center flex-row"}
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor={"gray"}
            bgColor={"transparent"}
            target={"_blank"}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={"flex flex-row items-center text-gray-300"}
      >
        <SocialIcon
          className={"cursor-pointer"}
          network={"email"}
          fgColor={"gray"}
          bgColor={"transparent"}
          url={"#contact"}
        />
        <Link href={"#contact"}>
          <div
            className={"uppercase hidden md:inline-flex text-sm text-gray-400"}
          >
            Get in Touch
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
