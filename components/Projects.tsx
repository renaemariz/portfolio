import React from "react";
import Card from "./Card";
import Pill from "./Pill";

const Projects = () => {
  const projects = [
    {
      title: "Admin Portal (Cafe Solutions)",
      tag: "Internal-Use",
      visualClass: "bg-linear-to-br from-indigo-500/20 to-zinc-800/50",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Architected a greenfield portal for
            managing multi-branch merchant configurations and complex menu data.
          </p>
          <p className="mt-1 mb-2">
            <strong>Custom UI: </strong>
            Engineered a responsive, data-heavy interface using Tailwind CSS,
            prioritizing high-precision merchant modifications and
            administrative efficiency.
          </p>
          <p className="my-1">
            <strong>Data Sync: </strong>
            Leveraged RTK Query for handle API requests and cache management,
            ensuring data stayed in sync across the merchant platform..
          </p>
        </>
      ),
      tech: ["React", "Nextjs", "TailwindCSS", "Typescript"],
    },
    {
      title: "Customer Portal",
      tag: "Client-Facing",
      visualClass: "bg-linear-to-br from-blue-500/20 to-zinc-800/50",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Managed the frontend code during a
            visual rebranding and technical updates of the customer-facing site.
          </p>
          <p className="mt-1 mb-2">
            <strong>Data Reliability: </strong>
            Leveraged RxJS to resolve data update issues, ensuring UI
            synchronization and consistent state management across dynamic page
            configurations.
          </p>
          <p className="my-1">
            <strong>Rebrand Architecture: </strong>
            Engineered a modular SCSS/Component structure to facilitate a rapid,
            low-friction rebrand, ensuring design consistency across the entire
            platform with minimal code changes.
          </p>
        </>
      ),
      tech: ["Angular", "RxJS", "SCSS", "RESTful APIs"],
    },
    {
      title: "Merchant App",
      tag: "Cross-Platform",
      visualClass: "bg-linear-to-br from-emerald-500/20 to-zinc-800/50",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Developed an App for Android and Sunmi
            POS hardware, enabling merchants to facilitate mobile top-ups,
            SandDollar digital payments, and utility transactions.
          </p>
          <p className="mt-1 mb-2">
            <strong>API Integration: </strong>
            Integrated APIs for real-time and QR transactions.
          </p>
          <p className="my-1">
            <strong>Reporting & Printing: </strong>
            Created a module to generate daily transaction logs and
            reconciliation summaries for on-device display and receipt printing.
          </p>
        </>
      ),
      tech: ["Ionic", "Capacitor", "Angular", "Sunmi Hardware"],
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main  text-center">
            Project{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              data={project.tech}
              renderItem={(tech) => <Pill text={tech} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
