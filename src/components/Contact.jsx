import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { MdEmail, MdPhoneIphone } from "react-icons/md";

const Contact = () => {
  return (
    <main
      id="contact"
      className="flex flex-col items-center justify-center px-6 py-20 lg:py-32 bg-transparent relative"
    >
      {/* Background Text */}
      <h1 className="absolute text-[6rem] md:text-[10rem] font-bold text-gray-900 opacity-10 top-10 left-1/2 -translate-x-1/2 tracking-widest select-none">
        CONTACT
      </h1>

      {/* Section Title */}
      <div className="z-10 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-wide mb-3">
          Get in touch
        </h2>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Have questions, opportunities, or ideas to collaborate?  
          Let’s connect and build something impactful.
        </p>
      </div>

      {/* Wrapper Box (Border Container) */}
      <div className="z-10 w-full max-w-3xl bg-[#0f0f0f]/40 border border-[#1a1a1a] rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        
        {/* 2-per-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactCard
            icon={<MdEmail className="text-xl" />}
            title="Email"
            value="psuriya1224@gmail.com"
            link="mailto:psuriya1224@gmail.com"
          />

          <ContactCard
            icon={<MdPhoneIphone className="text-xl" />}
            title="Mobile"
            value="+91 89250 38840"
            link="tel:+918925038840"
          />

          <ContactCard
            icon={<BiLogoLinkedin className="text-xl" />}
            title="LinkedIn"
            value="linkedin.com/in/suriya016"
            link="https://linkedin.com/in/suriya016"
          />

          <ContactCard
            icon={<BiLogoGithub className="text-xl" />}
            title="GitHub"
            value="github.com/weirdy1224"
            link="https://github.com/weirdy1224"
          />
        </div>
      </div>
    </main>
  );
};

const ContactCard = ({ icon, title, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-[#0f0f0f]/50 border border-[#1d1d1d] px-5 py-4 rounded-xl hover:border-[#333] hover:bg-[#151515] transition cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#262626]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-base">{value}</p>
      </div>
    </div>

    <i className="bx bx-right-arrow-alt text-xl text-gray-400"></i>
  </a>
);

export default Contact;
