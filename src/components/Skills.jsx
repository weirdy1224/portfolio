import React from "react";
import "boxicons/css/boxicons.min.css";

const Skills = () => {
  return (
    <main
      id="skills"
      className="flex flex-col items-center justify-center px-6 py-20 lg:py-32 bg-transparent"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-wide">
          Skills & Tech Stack
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
          A blend of full-stack development, cybersecurity, and creative
          storytelling — building, breaking, and beautifying digital experiences.
        </p>
      </div>

      {/* Top Icons Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {/* Icons styled as circles */}
        {[
          { icon: "bx bxl-html5", label: "HTML" },
          { icon: "bx bxl-javascript", label: "JavaScript" },
          { icon: "bx bxl-react", label: "React" },
          { icon: "bx bxl-nodejs", label: "Node.js" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-4"
            data-aos="fade-up"
          >
            <div className="w-28 h-28 rounded-full border border-gray-700 flex items-center justify-center text-5xl">
              <i className={item.icon}></i>
            </div>
            <p className="tracking-wide text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Skill Bars Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* LEFT SIDE SKILLS */}
        <div className="space-y-8">

          {/* Full Stack */}
          <SkillBar label="Full-Stack Fundamentals" value="70" />

          {/* Java */}
          <SkillBar label="Java (Core + OOP)" value="75" />

          {/* Python */}
          <SkillBar label="Python (Scripting + Automation)" value="60" />

          {/* C Programming */}
          <SkillBar label="C (Problem Solving)" value="55" />
        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className="space-y-8">

          {/* Cybersecurity */}
          <SkillBar label="Security Testing (Beginner)" value="60" />

          {/* Photography */}
          <SkillBar label="Photography" value="90" />

          {/* Lightroom */}
          <SkillBar label="Lightroom Editing" value="85" />

          {/* Premiere Pro */}
          <SkillBar label="Premiere Pro Video Editing" value="75" />
        </div>
      </div>

      {/* Tools Logos Row */}
      <div className="flex gap-10 mt-16 opacity-80 text-xl">
        <i className="bx bxl-git"></i>
        <i className="bx bxl-visual-studio"></i>
        <i className="bx bxl-java"></i>
        <i className="bx bxl-python"></i>
        <i className="bx bxs-camera"></i>
        <i className="bx bxs-videos"></i>
      </div>
    </main>
  );
};

const SkillBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="tracking-wide">{label}</span>
      <span className="text-gray-400">{value}%</span>
    </div>

    <div className="w-full h-2 bg-gray-800 rounded-full">
      <div
        style={{ width: `${value}%` }}
        className="h-full bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full"
      ></div>
    </div>
  </div>
);

export default Skills;
