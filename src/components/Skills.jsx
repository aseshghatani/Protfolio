import { motion } from "framer-motion";
import React from "react";
import {
  Sparkles,
  CodeXml,
  Server,
  Zap,
  GitBranch,
  Figma,
  Terminal,
} from "lucide-react";
import { skills, category } from "../data/skills.js";
import CircularProgress from "./CircularProgress.jsx";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full flex justify-center h-auto overflow-hidden  relative inset-0"
    >
      <div className="radial-blur -top-[200px] -left-[100px]"></div>
      <div className="radial-blur -right-[200px] top-[50%] -translate-y-[50%]"></div>
      <div className="radial-blur right-[50%] translate-x-[50%] -bottom-[200px]"></div>

      <div className="w-full md:w-[85%]  flex  flex-col  py-10 px-4 text-white">
        <div className="flex items-center mt-3">
          <div className="hint py-2 px-3 rounded-full flex items-center gap-2 bg-[#232326] border border-gray-600">
            <Sparkles className="w-4 h-4" />
            Available for new projects
          </div>
        </div>

        <div className="mt-3">
          <h1 className="font-bold">Skills & Expertise</h1>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] w-full  ">
          {/* row 1 */}
          <div className="card-skill md:col-span-2">
            <span className="absolute z-10 bottom-3 right-3">
              <CodeXml className="w-[100px] h-[100px] opacity-15" />
            </span>
            <div className="flex items-center gap-3">
              <span className="flex p-3 rounded-lg bg-[#38383c] ">
                <CodeXml className="w-8 h-8" />
              </span>
              <h3 className="font-bold">Frontend Development</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 items-center">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill, index) => (
                  <div
                    key={index}
                    className="flex px-5 pl-3 py-2 gap-3 items-center rounded-full justify-center bg-[#38383c]/30 border border-gray-500"
                  >
                    <img
                      src={skill.path}
                      alt={skill.name}
                      className="w-8 h-8  rounded-full  object-cover"
                    />
                    <p className="m-0 p-0 uppercase">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="card-skill items-center justify-center">
            <h1 className="font-bold">1+</h1>
            <p className="text-gray-500">years of Experience</p>
          </div>

          {/* Row 2 */}
          <div className="card-skill ">
            <h3 className="font-bold">Proficiency</h3>
            <div className="flex justify-around mt-5">
              {category.map((item, index) => (
                <CircularProgress
                  key={item.name}
                  value={item.level}
                  label={item.name}
                  color={item.color}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>
          <div className="card-skill md:col-span-2">
            <span className="absolute z-10 bottom-3 right-3">
              <Server className="w-[100px] h-[100px] opacity-15" />
            </span>
            <div className="flex items-center gap-3">
              <span className="flex p-3 rounded-lg bg-[#38383c] ">
                <Server className="w-8 h-8" />
              </span>
              <h3 className="font-bold">Backend & Database</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 items-center">
              {skills
                .filter(
                  (skill) =>
                    skill.category === "backend" ||
                    skill.category === "database"
                )
                .map((skill, index) => (
                  <div
                    key={index}
                    className="flex px-5 pl-3  py-2 gap-1 items-center rounded-full justify-center bg-[#38383c]/30 border border-gray-500"
                  >
                    <img
                      src={skill.path}
                      alt={skill.name}
                      className="w-8 h-8   object-cover "
                    />
                    <p className="m-0 p-0 uppercase">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Row 3*/}
          <div className="card-skill  justify-center">
            <h3 className="font-bold">Daily Tools</h3>
            <div className="mt-5 w-full grid grid-cols-2 gap-x-5 gap-y-3">
              <div className="p-3 rounded-lg gap-3 flex items-center bg-[#15151b]">
                <GitBranch className="w-5 h-5 text-gray-400" />
                Git
              </div>
              <div className="p-3 rounded-lg gap-3 flex items-center bg-[#15151b]">
                <CodeXml className="w-5 h-5 text-gray-400" />
                VS Code
              </div>
              <div className="p-3 rounded-lg gap-3 flex items-center bg-[#15151b]">
                <Figma className="w-5 h-5 text-gray-400" />
                Figma
              </div>
              <div className="p-3 rounded-lg gap-3 flex items-center bg-[#15151b]">
                <Terminal className="w-5 h-5 text-gray-400" />
                Terminal
              </div>
            </div>
          </div>
          <div className="card-skill md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex p-3 rounded-lg bg-[#38383c] ">
                <Zap className="w-8 h-8" />
              </span>
              <span className="flex flex-col">
                <h3 className="font-bold ">Languages</h3>
                <p className="hint text-gray-500">
                  Always exploring & learning
                </p>
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 items-center">
              {skills
                .filter((skill) => skill.type === "language")
                .map((skill, index) => (
                  <div
                    key={index}
                    className="flex px-5 pl-3  py-2 gap-1 items-center rounded-full justify-center bg-[#38383c]/30 border border-gray-500"
                  >
                    <p className="m-0 p-0 uppercase">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
