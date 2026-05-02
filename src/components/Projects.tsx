"use client";
import React from "react";
import Card from "./Card";
import Pill from "./Pill";
import { fadeInLeft, fadeInY, staggerContainer } from "@/lib/motions";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Admin Portal",
      subTitle: "Cafe Solutions - Australia",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Architected a greenfield portal for
            managing merchant configurations, card management, reports and
            complex menu data.
          </p>
          <p className="mt-1 mb-2">
            <strong>Custom UI: </strong>
            Engineered a responsive, data-heavy interface using Tanstack Table,
            prioritizing high-precision merchant modifications and
            administrative efficiency.
          </p>
          <p className="my-1">
            <strong>Data Sync: </strong>
            Leveraged RTK Query for handle API requests and cache management,
            ensuring data stayed in sync across the merchant platform.
          </p>
        </>
      ),
      tech: [
        "React",
        "Nextjs",
        "Tanstack Table",
        "RTK Query",
        "Echarts",
        "Storybook",
      ],
    },
    {
      title: "Customer Portal",
      subTitle: "Casino Marker Technology - Las Vegas",
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
      tech: ["Angular", "RxJS", "NG-ZORRO", "SCSS", "TypeScript", "Chartjs"],
    },
    {
      title: "Merchant App",
      subTitle: "Financial Services - Bahamas",
      description: (
        <>
          <p className="mt-1 mb-2">
            <strong>The Build: </strong> Developed an App for Android and Sunmi
            POS hardware, enabling merchants or agents to facilitate mobile
            top-ups, QR scanning, utility and other transactions.
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
      tech: ["Ionic", "Capacitor", "Angular", "Google Play", "Sunmi Hardware"],
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInY}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main  text-center">
            Project{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInLeft}>
              <Card
                key={index}
                index={index}
                title={project.title}
                subTitle={project.subTitle}
                cardBody={project.description}
                data={project.tech}
                renderItemStyle="fill"
                renderItem={(tech) => <Pill text={tech} />}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
