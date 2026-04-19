import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto py-24 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-main text-center">
            About{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              me
            </span>
          </h2>
        </div>

        <div className="text-xl text-secondary">
          <p className=" mb-3">
            Senior Frontend Developer specializing in enterprise web
            applications. I specialize in React, Next.js, and Angular, with a
            strong focus on system design, architecture, and modernizing complex
            legacy platforms.
          </p>
          <p className="mb-3">
            I believe that behind every seamless user experience is a codebase
            built with clarity and intent. My engineering philosophy is simple:{" "}
            <strong className="text-main dark:text-zinc-100">
              code should be as elegant as the interfaces it powers.
            </strong>{" "}
            I specialize in turning complex, large-scale systems into
            maintainable, scalable frontend solutions.
          </p>
          <p className=" mb-3">
            Whether the environment is web-based or a mobile application, I
            bridge the gap between complex business requirements and the
            end-user.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
