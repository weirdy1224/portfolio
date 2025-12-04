const experiences = [
  {
    duration: "Jun 2025 — Aug 2025",
    title: "Developer Intern",
    company: "Cyber Crime Wing, Tamil Nadu Police",
    location: "Chennai, TN",
    bullets: [
      "Developed a customer grievance portal enabling the public to submit requests to unfreeze frozen bank accounts (ReactJS + MySQL).",
      "Collaborated with police officials and interns to integrate the portal with other services.",
      "Performed security testing and helped improve portal reliability."
    ]
  },
  {
    duration: "Oct 2024 — Mar 2025",
    title: "Research & Developer Intern",
    company: "Hebesec Technologies Pvt Ltd",
    location: "Chennai, TN",
    bullets: [
      "Designed and developed a scalable Vulnerability Report Management System using the MERN stack.",
      "Improved report accessibility and tracking efficiency by 30%.",
      "Collaborated with a 6-member agile team to deliver enterprise-grade features."
    ]
  },
  {
    duration: "Jun 2024 — Jul 2024",
    title: "VAPT Intern",
    company: "Hebesec Technologies Pvt Ltd",
    location: "Chennai, TN",
    bullets: [
      "Performed hands-on security testing on real-world websites.",
      "Identified 15+ vulnerabilities and improved system security posture by 20%.",
      "Provided detailed remediation steps and collaborated with developers."
    ]
  },
  {
    duration: "May 2024 — May 2024",
    title: "System Administration Intern",
    company: "Vectra Technosoft Pvt Ltd",
    location: "Chennai, India",
    bullets: [
      "Managed Linux file systems and storage configurations.",
      "Performed upgrades ensuring data integrity and redundancy.",
      "Contributed to system optimization efforts."
    ]
  }
];

const Exp = () => {
  return (
    <main
      id="exp"
      className="flex flex-col items-center justify-center px-6 py-20 lg:py-32 bg-transparent"
    >
      {/* Header */}
      <h2 className="text-4xl lg:text-5xl font-semibold tracking-wide mb-12">
        My <span className="text-gray-400">Experience</span>
      </h2>

      {/* Experience List */}
      <div className="w-full max-w-5xl space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="w-full bg-[#111] border border-[#1d1d1d] hover:border-[#2a2a2a] transition-all duration-300 rounded-2xl p-6 md:p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)]"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-gray-400 text-sm tracking-wide">
                {exp.duration}
              </span>

              <div className="text-right">
                <h3 className="text-lg md:text-xl font-semibold">
                  {exp.company}
                </h3>
                <p className="text-gray-400 text-sm">{exp.title}</p>
              </div>
            </div>

            {/* Bullets */}
            <ul className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2 mt-4 ml-1">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#e99b63] mt-[3px]">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Exp;
