"use client";
import React from "react";
import Card from "./Card";
import Pill from "./Pill";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInY, staggerContainer } from "@/lib/motions";

// Define the structure for our skill categories
interface SkillCategory {
  title: string;
  label: string;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    label: "Frontend & Mobile",
    skills: [
      "Next.js",
      "React",
      "Angular",
      "TypeScript",
      "Javascript (ES6+)",
      "Ionic",
      "Capacitor",
      "Cordova",
    ],
  },
  {
    title: "UI / Design Systems",
    label: "UI / Design Systems",
    skills: [
      "TailwindCSS",
      "Ant Design",
      "Storybook",
      "shadcn",
      "Chartjs",
      "Echarts",
      "Angular Material",
    ],
  },
  {
    title: "Systems & Data",
    label: "Systems & Data",
    skills: [
      "RTK Query",
      "Redux",
      "Webpack",
      "Axios",
      "RESTful APIs",
      "AWS S3",
      "App Store",
      "Google Play",
      "Jira",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto py-24 px-6 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInY}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main  text-center">
            Technical{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="h-1 w-20 mt-4 bg-linear-to-r from-grad-from to-grad-to rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillData.map((category, index) => (
            <motion.div key={index} variants={fadeInLeft}>
              <Card
                key={index}
                index={index}
                title={category.label}
                data={category.skills}
                renderItemStyle="fill"
                renderItem={(skill) => <Pill text={skill} />}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
