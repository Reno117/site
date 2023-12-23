"use client";
import Image from "next/image";
import Link from "next/link";
import ColoredTextBlock from "./components/ColoredTextBlock";
import PortfolioDescript from "./components/PortfolioDescript";
import ClemsonCourtsDescript from "./components/ClemsonCourtsDescript";
import CarHacksDescript from "./components/CarHacksDescript";

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
        className="h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url("/file-u4JUJf8Pjjecc5wl3D1xcq9C.png")' }}
      >
        <h1 className="text-7xl text-black mb-8 text-center">
          Parker Estes's Portfolio Website
        </h1>
        <a
          href="#"
          className="text-5xl font-bold py-16 absolute bottom-0 mb-8"
          onClick={(event) => scrollToSection("section3", event)}
        >
          Go to Projects
        </a>
      </div>

      {/* Section 2: Content */}
      <div
        id="section2"
        className="bg-gray-200 p-8 z-50 flex-wrap md:grid md:grid-cols-2"
      >
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
          <ColoredTextBlock />
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
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
        </div>
        <div className="grid-cols-2 grid">
          <h1 className="text-3xl mb-2 text-center ml-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Carolina Hacks
          </h1>
        </div>
        <div className="mt-2 ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/carhacks" passHref>
            <div className="flex justify-center">
              {/* Wrap both components in a flex container */}
              <div className="ml-4">
                <img
                  src="./car_hacks.png"
                  alt="logo"
                  className="object-cover transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </Link>
          <CarHacksDescript />
        </div>

        <div className="grid-cols-2 grid">
          <h1 className="text-3xl mb-2 text-center ml-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Portfolio Website
          </h1>
        </div>
        <div className="mt-2 ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/carhacks" passHref>
            <div className="flex justify-center">
              {/* Wrap both components in a flex container */}
              <div className="ml-4 overflow-hidden">
                <img
                  src="./nexjts-react.png"
                  alt="logo"
                  className="object-cover transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </Link>
          <PortfolioDescript />
        </div>

        <div className="grid-cols-2 grid">
          <h1 className="text-3xl mb-2 text-center ml-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Clemson Courts
          </h1>
        </div>
        <div className="mt-2 ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/carhacks" passHref>
            <div className="flex justify-center">
              {/* Wrap both components in a flex container */}
              <div className="ml-4 overflow-hidden">
                <img
                  src="./courts.jpg_large"
                  alt="logo"
                  className="object-cover transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </Link>
          <ClemsonCourtsDescript />
        </div>
      </div>
    </div>
  );
}
