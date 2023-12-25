"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light gradient-custom sticky top-0 left-0 right-0 h-16 z-[100]">
      <div className="flex items-center gap-4">
        <div className="rounded-full object-contain overflow-hidden h-[40px]">
          <Image src="/portrait3.jpg" alt="parkers" width={40} height={40} />
        </div>
        <p className="text-light font-sans">Parker Estes</p>
      </div>
      <div className="flex justify-end w-full text-black font-sans font-medium">
        <ul>
          <li className="active">
            <Link href="/">Home</Link>
          </li>
          <li>
            <a
              href="#"
              className=""
              onClick={(event) => scrollToSection("section2", event)}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
