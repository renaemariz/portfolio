import React from "react";
import Card from "./Card";
import Pill from "./Pill";

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
      "Ionic",
      "Capacitor",
      "Cordova",
    ],
  },
  {
    title: "UI / Design Systems",
    label: "UI / Design Systems",
    skills: ["Tailwind CSS", "Storybook", "Angular Material", "Bootstrap"],
  },
  {
    title: "Systems & Data",
    label: "Systems & Data",
    skills: [
      "RTK Query",
      "Redux",
      "RESTful APIs",
      "AWS S3",
      "App Store",
      "Google Play",
      "Webpack",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto py-24 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main  text-center">
            Technical{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="h-1 w-20 mt-4 bg-linear-to-r from-grad-from to-grad-to rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((category, index) => (
            <Card
              key={index}
              index={index}
              title={category.label}
              data={category.skills}
              renderItem={(skill) => <Pill text={skill} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
