import 'boxicons/css/boxicons.min.css';

export const Hero = () => {
    return (
        <main
            id="about"
            className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] px-6 ml-10"
        >
            <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className="max-w-xl lg:ml-[5%] z-10 mt-20 md:mt-10 lg:mt-0"
            >
                <div className="relative w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 tracking-wide text-sm sm:text-base">
                        <i className="bx bx-user"></i> ABOUT ME
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                    Hi! I'm Suriya P
                </h1>

                <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[28rem] lg:max-w-[32rem] leading-relaxed">
                    I’m a cyber-driven full-stack developer who builds modern, powerful web experiences.
                    React handles the looks, Node.js handles the brains —
                    I just bring the romance.
                    <br />
                    <br />
                    Like every cheesy movie hero, I believe:<br />
                    <p style={{fontWeight:'bolder'}}>“If you love something… you debug it till it works.”</p>
                    <br />
                    Always exploring new tech,
                    always chasing that perfect blend of performance, security, and simplicity.
                </p>

                <div className="flex gap-4 mt-10">
                    <a
                        className="border border-[#2a2a2a] py-2 px-5 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
                        href="#contact"
                        target="_blank"
                    >
                        <i className="bx bxl-gmail"> Get In Touch </i>
                    </a>

                    <a
                        className="border border-[#2a2a2a] py-2 px-5 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
                        href="/Resume.pdf"
                        target="_blank"
                    >
                        <i className="bx  bx-arrow-to-bottom"> Resume</i>
                    </a>
                </div>
            </div>

            <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className="mt-16 lg:mt-0"
            >
                <img
                    src="/IMG_4599.JPG"  
                    alt="Profile"
                    className="w-64 sm:w-72 lg:w-96 rounded-2xl shadow-lg opacity-90 mr-20 hover:opacity-100 transition-opacity duration-500 "
                />
            </div>
        </main>
    );
};
