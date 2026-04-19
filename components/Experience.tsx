import React from "react";
import Card from "./Card";
import Pill from "./Pill";

const Experience = () => {
  const experiences = [
    {
      date: "2024 — Present",
      company: "Xentra Infotech Solutions Inc",
      role: "Senior Frontend Developer",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Architected a suite of greenfield portals (Admin/Merchant) from
              inception, defining a scalable tech stack using Next.js and RTK
              Query to optimize complex data-fetching and state management.
            </li>
            <li>
              Standardized UI/UX quality by documenting complex interaction
              patterns in Storybook, accelerating development cycles and
              ensuring cross-team architectural alignment.
            </li>
            <li>
              Managed end-to-end deployment utilizing AWS S3 for web hosting and
              overseen successful releases to the App Store and Google Play.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
    {
      date: "2021 — 2024",
      company: "Xentra Infotech Solutions Inc",
      role: "Frontend Developer",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Created pages and functionality using Ionic to deliver standalone
              applications with a shared codebase, ensuring 100% cross-platform
              consistency.
            </li>
            <li>
              Rebranded, maintained, and updated customer portals using Angular,
              engineering feature updates that prioritized data accuracy and
              long-term system stability.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
    {
      date: "2016 — 2020",
      company: "Miyens Technologies",
      role: "Quality Assurance / Developer",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Collaborated on an eLearning platform using Laravel, Vue.js, and
              Ionic, optimizing performance and expanding core feature sets.
            </li>
            <li>
              Created test plans and executed testing for enhancements and fixes
              on applications.
            </li>
            <li>
              Developed interactive promotional games and Augmented Reality (AR)
              applications using Construct 2 and Kinect to drive user
              engagement.
            </li>
          </ul>
        </>
      ),
      tech: [],
    },
  ];

  return (
    <section
      id="experience"
      className="container mx-auto py-24 px-6 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main text-center">
            Work{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 group "
            >
              {/* Left Column: Date and Company */}
              <div className="md:w-1/4 flex flex-col pt-2 text-left md:text-right">
                <span className="text-lg font-bold tracking-wider text-indigo-400 uppercase">
                  {exp.date}
                </span>
                <span className="text-zinc-500 font-medium text-md">
                  {exp.company}
                </span>
              </div>

              {/* Right Column: Content */}
              <div className="md:w-2/4 flex flex-col pt-1">
                <Card
                  key={index}
                  index={index}
                  title={exp.role}
                  description={exp.description}
                  data={exp.tech}
                  renderItem={(tech) => <Pill text={tech} />}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
