import 'boxicons/css/boxicons.min.css';

const Header = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }
    return (
        <header className="flex justify-between items-center py-6 px-4 lg:px-20">

            <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0 fixed top-7 z-50" href="#">
                <img src="/f1.jpg" alt="" className="w-12 h-12 rounded-full"/>
            </a>

            <nav className="hidden md:flex items-center gap-12 fixed top-7 right-6 z-50">
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#about">
                    About
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#skills">
                    Skills
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#exp">
                    Experience
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#projects">
                    Projects
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#contact">
                    Contact
                </a>
            </nav>

            <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
                <i class='bx bx-menu'></i>
            </button>

            <div id='mobileMenu' className=' hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-sm'>
                <nav className="flex flex-col md:hidden items-center">
                    <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#about">
                    About
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#skills">
                    Skills
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#exp">
                    Experience
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#projects">
                    Projects
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#contact">
                    Contact
                </a>
                </nav>
            </div>
        </header>
    )
}

export default Header