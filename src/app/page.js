"use client";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const projects = [
    {
      id: "project1",
      title: "The PacMan Project",
      description:
        "The PacMan Project implemented AI techniques, including search algorithms, probabilistic inference, and reinforcement learning, in Pac-Man, resulting in enhanced game performance and demonstrating strong problem-solving and critical thinking skills",
      technologies: ["Python", "PyTorch"],
      imgSrc: "/project1.png",
      linkable: true,
    },
    {
      id: "project2",
      title: "Forecasting Asthma and Analyzing COPD Prevalence",
      description:
        "Analyzed the causal relationship between PM2.5 concentration and increased COPD prevalence in adults",
      technologies: ["Python", "Numpy/Pandas", "SQL"],
      imgSrc: "/project2.jpeg",
    },
    {
      id: "project3",
      title: "BYOW",
      description: "Build Your Own World by using Java and Std Draw library",
      technologies: ["Java"],
      imgSrc: "/project3.png",
      linkable: true,
    },
    {
      id: "project4",
      title: "Ham / Spam mail Classification",
      description:
        "Developed a machine learning model to classify emails as ham or spam",
      technologies: ["Python", "Numpy/Pandas", "SQL"],
      imgSrc: "/project4.jpeg",
    },
    {
      id: "project5",
      title: "Noteworthy",
      description:
        "Designed and developed an webesite to showcase acapella club",
      technologies: ["React.js", "Figma"],
      imgSrc: "/project5.png",
      linkable: false,
    },
    {
      id: "project6",
      title: "Portfolio",
      description: "My portfoilo site built with Next.js and Tailwind CSS",
      technologies: ["Next.js", "Tailwind.css"],
      imgSrc: "/project6.png",
    },
  ];
  const visibleProjects = expanded ? projects : projects.slice(0, 4);

  return (
    <>
      <main className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Section (Left Side) */}

          <aside className="lg:w-1/3 bg-custom1 p-6 rounded-lg shadow-md">
            <div className="text-center lg:text-left">
              {/* <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={32}
                height={32}
              /> */}
              <h1 className="text-gray-400 text-3xl font-bold mt-4">
                Jae Hoon Choi
              </h1>
              {/*Job Position <p className="text-gray-600">Data Analyst</p> */}

              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/jae-hoon-choi-a160022b8"
                  className="text-blue-600"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/hoons1130"
                  className="text-blue-600"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>

                {/* <a href="#" className="text-blue-600 font-semibold">
                  Kaggle
                </a> */}
                <a
                  href="mailto:hoon11302000@gmail.com"
                  className="text-blue-600"
                  target="_blank"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>

            <section className="mt-8">
              <h2 className="text-gray-400 text-xl font-bold">About</h2>
              <p className="mt-4 text-gray-700">
                I am a Data Science graduate with a strong interest in machine
                learning, data engineering, and backend development.<br></br> I
                enjoy learning new technologies and continuosly expanding my
                skill set to solve complex problems.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-custom4 text-xl font-bold">Skills</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "Java",
                  "SQL",
                  "R",
                  "Node.js",
                  "MongoDB",
                  "Next.js",
                  "React.js",
                  "PyTorch",
                  "TensorFlow",
                  "Tableau",
                  "Excel",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-custom2 text-custom3 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          {/* Main Content Section (Right Side) */}
          <section className="lg:w-2/3 flex flex-col gap-8">
            {/* Projects Section */}

            <section>
              <h2 className="text-gray-400 text-2xl font-bold">Projects</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {visibleProjects.map((project) =>
                  project.linkable ? (
                    <Link href={`/${project.id}`} key={project.id}>
                      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                        <Image
                          src={project.imgSrc}
                          alt={project.title}
                          width={480}
                          height={480}
                        />
                        <h3 className="text-custom4 text-xl font-semibold mt-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 mt-2">
                          {project.description}
                        </p>
                        <div className="flex gap-2 mt-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm bg-custom2 text-custom3 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={project.id}
                      className="bg-white shadow-md rounded-lg p-4"
                    >
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        width={480}
                        height={480}
                      />
                      <h3 className="text-custom4 text-xl font-semibold mt-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mt-2">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm bg-custom2 text-custom3 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Expand Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="bg-custom3 text-white px-4 py-2 rounded hover:bg-custom3 transition duration-200"
                >
                  {expanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-gray-400 text-2xl font-bold">Education</h2>
              <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                <h3 className="text-custom4 text-xl font-semibold">
                  Data Science, Univesity of California, Berkeley
                </h3>
                <p className="text-custom4 text-right">2024</p>
                <p className="text-custom4 mt-2">
                  Graduated with a degree in Data Science, gaining strong skills
                  in machine learning, statistical analysis, and data
                  engineering. Proficient in Python, R, and SQL, with hands-on
                  experience in data analysis, visualization, and building data
                  pipelines.
                </p>
              </div>
            </section>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
