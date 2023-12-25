"use client";
// import Image from "next/image";
// import Link from "next/link";
import ColoredTextBlock from "./components/ColoredTextBlock";
import CarHacksDescript from "./components/CarHacksDescript";
import PortfolioDescript from "./components/PortfolioDescript";
import ClemsonCourtsDescript from "./components/ClemsonCourtsDescript";

export default function Home() {
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url("/file-u4JUJf8Pjjecc5wl3D1xcq9C.png")' }}
      >
        <h1 className="text-7xl text-white mb-8 text-center bg-black px-6 py-4 rounded bg-opacity-75">
          Parker Estes Portfolio Website
        </h1>
        {/* b58f75 */}
        <button
          className="text-3xl text-white font-bold py-4 absolute bottom-32 btn btn-lg bg-[#2f5261]"
          onClick={(event) => scrollToSection("section3", event)}
        >
          Go to Projects
        </button>
      </div>

      {/* Section 2: Content */}
      <div
        id="section2"
        className="bg-gray-200 p-8 z-50 flex-wrap md:grid md:grid-cols-2"
      >
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
          <div className="flex justify-center">
            <ColoredTextBlock />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">My Skills</h1>
          <div className="skills text-center">
            <div>HTML/TSX</div>
            <div>CSS/tailwind</div>
            <div>Javascript</div>
            <div>Python</div>
            <div>Nextjs</div>
            <div>React</div>
            <div>C</div>
            <div>Github</div>
            <div>MySQL basics</div>
          </div>
        </div>
      </div>

      {/* Section 3: More Content */}

      <div id="section3" className="bg-[#FFF8F8] p-8">
        <div className="text-center mx-auto">
          <h2 className="text-3xl font-bold mb-20">Projects</h2>
        </div>
        <div className="flex justify-center">
        <div className="border-[#000000] border-b-[2px] w-14 " />
        </div>
          

        <h1 className="text-3xl mb-2 text-center ml-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Carolina Hacks
        </h1>

        <div className="mb-10 flex justify-center">
          <div className="items-center mt-2 mb-8 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1200px]">
            <div className="flex-grow">
            <img 
              src="./car_hacks.png"
              alt="logo"
              className="w-full object-cover transition-transform transform hover:scale-110"
            />
            </div>
            <CarHacksDescript />
          </div>
        </div>

        <h1 className="text-3xl mb-2 text-center ml-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Portfolio Website
        </h1>

        <div className="mb-10 flex justify-center">
          <div className="items-center mt-2 mb-8 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1200px]">
            <div className="flex-grow">
            <img 
              src="./nexjts-react.png"
              alt="logo"
              className="w-full object-cover transition-transform transform hover:scale-110"
            />
            </div>
            <PortfolioDescript />
          </div>
        </div>

        <h1 className="text-3xl mb-2 text-center ml-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Clemson Courts
        </h1>

        <div className="mb-10 flex justify-center">
          <div className="items-center mt-2 mb-8 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1200px]">
            <div className="flex-grow">
            <img 
              src="./courts.jpg_large"
              alt="logo"
              className="w-full object-cover transition-transform transform hover:scale-110"
            />
            </div>
            <ClemsonCourtsDescript />
          </div>
        </div>
      </div>
    </div>
  );
}
