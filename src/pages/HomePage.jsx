import React from "react";
import Navbar from "../components/Navbar.jsx";
import {
  Sparkles,
  FileTerminal,
  Server,
  Database,
  AppWindow,
  ServerCrash,
  Phone,
  Mail,
} from "lucide-react";
import { skills } from "../data/skills.js";
import { projects } from "../data/projects.js";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="w-full flex justify-center items-center   mt-[50px] md:mt-[110px] ">
        <div className="w-full md:w-[85%] flex  md:flex-row flex-col  py-10 px-4 gap-8 ">
          <div className="w-full md:w-[50%]">
            <div className="flex items-center mt-3">
              <div className="hint py-2 px-3 rounded-full flex items-center gap-2 bg-gray-200">
                <Sparkles className="w-4 h-4" />
                Available for new projects
              </div>
            </div>
            <h1 className="font-bold mt-3">Asesh Ghatani</h1>
            <h3 className="mt-3 text-gray-500">Full Stack Developer</h3>
            <p className="text-gray-500 mt-3">
              I build modern web applications with a focus on clean code,
              performance, and user experience. With 1 year of experience in
              full stack development, I specialize in creating scalable
              solutions using React, Node.js, PHP, and Laravel.
            </p>
            <div className="flex items-center mt-10 gap-5">
              <a
                href="#projects"
                className="flex items-center hover:bg-black/80 transition-all duration-300  px-5 py-2 rounded-md bg-black text-white"
              >
                <p>View My Works</p>
              </a>
              <a
                href="#contact"
                className="flex items-center hover:shadow-md transition-all duration-300  px-5 py-2 rounded-md  text-black border border-gray-300"
              >
                <p>Get in Touch</p>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex justify-center overflow-hidden">
            <div className="w-[400px] h-[400px] relative inset-0">
              <div className="absolute left-[100px]  w-full h-full block bg-black/50 rounded-full z-10 "></div>
              <img
                src="../public/images/dp3.png"
                className="w-full h-full object-cover absolute inset-0 z-40  border-b-4 border-black"
                alt="1"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section
        id="about"
        className="w-full flex justify-center items-center bg-black"
      >
        <div className="w-full md:w-[85%] flex flex-col md:flex-row gap-5  py-10 px-4 text-white">
          <div className="w-full md:w-[50%]">
            <h1 className="font-bold">About</h1>
            <p className="mt-5">
              I'm a passionate full stack developer who loves crafting elegant
              solutions to complex problems. My journey in web development has
              equipped me with a diverse skill set spanning both frontend and
              backend technologies. <br />
              <br /> Whether it's building a sleek static website or
              architecting a comprehensive full-stack application, I approach
              each project with dedication to quality, performance, and
              maintainability. <br /> <br /> I believe in writing clean,
              efficient code and staying up-to-date with the latest industry
              trends and best practices. My goal is to deliver solutions that
              not only meet technical requirements but also provide exceptional
              user experiences.
            </p>
          </div>
          <div className="w-full md:w-[50%] md:p-4 flex flex-col gap-5 items-center justify-center">
            <div className="w-full rounded-xl border border-gray-500 p-4 bg-[#10141e]">
              <h3 className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Experience
              </h3>
              <h2 className="mt-3">1 year</h2>
              <p className="mt-3">Full Stack Web Developer</p>
            </div>
            <div className="w-full rounded-xl border border-gray-500 p-4 bg-[#10141e]">
              <h3 className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Focus Areas
              </h3>
              <div className="mt-5 text-gray-300 flex flex-col gap-3">
                <p className="flex gap-3">
                  <FileTerminal />
                  Modern Web Applications
                </p>
                <p className="flex gap-3">
                  <Database />
                  Database Architecture
                </p>
                <p className="flex gap-3">
                  <Server />
                  Backend Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section */}

      <section
        id="services"
        className="w-full flex justify-center items-center  "
      >
        <div className="w-full md:w-[85%]    py-10 px-4 ">
          <div className="w-full flex justify-center items-center flex-col">
            <h1 className="font-bold">Services</h1>
            <p className="mt-3 text-gray-500 text-center">
              I offer comprehensive web development services tailored to your
              specific needs, from simple landing pages to complex full-stack
              applications.
            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row w-full justify-between gap-10">
            <div className="w-full md:w-[50%] p-4 border rounded-xl border-gray-300 shadow-md">
              <div className="w-full flex items-center">
                <span className="flex p-3 rounded-xl bg-black ">
                  <AppWindow className="text-white size-8" />
                </span>
              </div>
              <h3 className="mt-5">Static Site Development</h3>
              <p className="text-gray-500">
                Fast, responsive, and SEO-friendly static websites built with
                modern technologies. Perfect for portfolios, landing pages, and
                marketing sites.
              </p>
            </div>
            <div className="w-full md:w-[50%] p-4 border rounded-xl border-gray-300 shadow-md">
              <div className="w-full flex items-center">
                <span className="flex p-3 rounded-xl bg-black ">
                  <ServerCrash className="text-white size-8" />
                </span>
              </div>
              <h3 className="mt-5">Full Stack Dynamic Sites</h3>
              <p className="text-gray-500">
                Complete web applications with robust backends, database
                integration, and interactive user interfaces. Scalable solutions
                for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="w-full flex justify-center items-center  bg-black "
      >
        <div className="w-full md:w-[85%]  flex  flex-col md:flex-row  py-10 px-4 text-white">
          <div className="w-full md:w-[50%] ">
            <h1 className="font-bold text-center md:text-start">
              Technical Skills
            </h1>
            <p className="mt-3 md:text-start text-center">
              Technologies and tools I work with to bring ideas to life.
            </p>
            <div className="w-full md:hidden block md:w-[50%]  ">
              <img src="../public/svg/Programming-pana.svg" alt="1" />
            </div>
            <ul className="flex flex-col gap-5 mt-5">
              {skills.map((skill, index) => (
                <li className=" flex flex-col">
                  <span className="flex items-center gap-3">
                    <h3 className="flex items-center gap-3">{skill.name}</h3>
                    <span className="flex px-2  hint rounded-full bg-green-500">
                      {skill.category}
                    </span>
                  </span>
                  <span className="skills mt-5">
                    <div
                      className="skills-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    <div className="marks">{skill.level}%</div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full hidden md:block md:w-[50%]  ">
            <img src="../public/svg/Programming-pana.svg" alt="1" />
          </div>
        </div>
      </section>
      {/* projects */}
      <section
        id="projects"
        className="w-full flex justify-center items-center  "
      >
        <div className="w-full md:w-[85%]    py-10 px-4 ">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="font-bold">Projects</h1>
            <p className="text-gray-500 text-center">
              A selection of real-world projects where I've designed, built, and
              shipped practical solutions. Each project reflects my approach to
              clean code, scalable architecture, and user-focused development.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-5  mt-8">
            {projects.map((projects, index) => (
              <div className="rounded-xl shadow-md ">
                <div className="w-full block h-[250px] relative inset-0 rounded-xl projects overflow-hidden">
                  <img
                    src={projects.thumbnail}
                    className="proj-img w-full h-full absolute rounded-xl object-contain block  z-10 "
                    alt="2"
                  />
                  <div className="w-full border-[8px] border-gray-300 flex flex-col justify-between inset-0 rounded-xl h-full bg-black/60 backdrop-blur-sm absolute z-20 p-4 text-white">
                    <div>
                      <h2 className="">{projects.name}</h2>

                      <div className="flex flex-wrap items-center gap-3 ">
                        {projects.tools.map((tools) => (
                          <span
                            key={tools}
                            className="flex px-2  hint rounded-full bg-gray-500/80 text-white"
                          >
                            {tools}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="flex items-center gap-3">
                        <span>Client: {projects.client}</span>
                        <span className="flex px-3 py-1 rounded-md bg-white text-black ">
                          {projects.status}
                        </span>
                      </p>
                      <div className="flex items-end  gap-3">
                        <a
                          target="_blank"
                          href={projects.url}
                          className=" mt-3 px-3 py-2 border border-white"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* contat */}
      <section
        id="contact"
        className="w-full flex justify-center items-center  bg-black"
      >
        <div className="w-full md:w-[85%]    py-10 px-4 ">
          <div className="flex flex-col md:items-center justify-center text-white">
            <h2>Lets Work Together</h2>
            <h3 className="text-gray-400 md:text-center md:w-[70%]">
              I'm always interested in hearing about new projects and
              opportunities. Whether you need a simple website or a complex web
              application, let's discuss how I can help bring your ideas to
              life.
            </h3>
            <ul className="mt-5">
              <li className="flex items-center hover:underline gap-3">
                <Phone />{" "}
                <a href="tel:+919933143951" target="_blank">
                  +91-9933143951
                </a>
              </li>
              <div className="flex items-center hover:underline gap-3 mt-3">
                <Mail />
                <a href="mailto:aseshghatani4@gmail.com" target="_blank">
                  aseshghatani4@gmail.com
                </a>
              </div>
            </ul>
            <div className="flex items-center">
              <a
                href="wa.me/919933143951"
                target="_blank"
                className="bg-white md:w-auto w-full justify-center flex items-center gap-3 hover:bg-[#25D366] transition-all duration-300 text-black rounded-lg px-3 py-2 mt-5"
              >
                Get in Touch
                <svg
                  className="w-5 h-5"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
