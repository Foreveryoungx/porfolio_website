import React from "react";
import { motion } from "framer-motion";
import SkillType from "./Skill";
import { Skill } from "../typings";

type Props = {
  skills: Skill[];
};
export default function Skills({ skills }: Props) {
  return (
    <motion.div
      className={
        "h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      }
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3
        className={
          "absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"
        }
      >
        Hover over the icons to check out my experience with each language
      </h3>

      <div className={"grid grid-cols-4 gap-5 "}>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillType key={skill._id} skill={skill} />
        ))}
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillType key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
