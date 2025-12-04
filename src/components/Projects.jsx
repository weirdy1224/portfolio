const projectData = [
  {
    title: "Vulnerability Management Tool",
    desc: "MERN-based vulnerability report management system reducing manual compilation time by 50% and improving performance through optimized backend architecture.",
    tags: ["MERN", "Security", "Agile"],
    link: "https://github.com/weirdy1224/vm-final-v1"
  },
  {
    title: "Ailurus – File Encryption & PII Redactor",
    desc: "Modular Flask-based application for secure encryption/decryption with integrated PII redaction, engineered for scalability and compliance.",
    tags: ["Python", "Cryptography", "Flask"],
    link: "https://github.com/weirdy1224/PII-"
  },
  {
    title: "De-Freeze Bank Account Portal",
    desc: "Full-stack grievance portal using React.js & MySQL for handling frozen bank account requests with authentication and status tracking.",
    tags: ["React", "MySQL", "Authentication"],
    link: "https://github.com/weirdy1224/ccw-v1"
  }
];

const Projects = () => {
  return (
    <main
      id="projects"
      className="flex flex-col items-center justify-center px-6 py-20 lg:py-32 bg-transparent"
    >
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-semibold tracking-wide mb-12">
        Pro<span className="text-gray-400">jects</span>
      </h2>

      {/* Project Cards Grid */}
      {/* Project Cards Grid */}
<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {projectData.slice(0, 2).map((proj, index) => (
    <div
      key={index}
      onClick={() => window.open(proj.link, "_blank")}
      className="cursor-pointer group bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-6 
                 transition-all duration-300 hover:bg-[#151515] hover:border-[#333] 
                 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
      data-aos="fade-up"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold group-hover:text-[#e99b63] transition-colors duration-300">
          {proj.title}
        </h3>
        <i className="bx bx-link-external text-gray-400 text-lg group-hover:text-white"></i>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {proj.desc}
      </p>

      <div className="flex gap-2 flex-wrap">
        {proj.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  ))}

  {/* Centered 3rd Card */}
  <div className="md:col-span-2 flex justify-center">
    <div
      onClick={() => window.open(projectData[2].link, "_blank")}
      className="w-full md:w-1/2 cursor-pointer group bg-[#0f0f0f] border border-[#1c1c1c] 
                 rounded-xl p-6 transition-all duration-300 hover:bg-[#151515] 
                 hover:border-[#333] shadow-[0_0_20px_rgba(255,255,255,0.02)]"
      data-aos="fade-up"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold group-hover:text-[#e99b63] transition-colors duration-300">
          {projectData[2].title}
        </h3>
        <i className="bx bx-link-external text-gray-400 text-lg group-hover:text-white"></i>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {projectData[2].desc}
      </p>

      <div className="flex gap-2 flex-wrap">
        {projectData[2].tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>

</div>

    </main>
  );
};

export default Projects;
