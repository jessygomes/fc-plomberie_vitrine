"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import NavMobile from "./Navbar/NavbarMobile";
import Image from "next/image";
import NavbarDesktop from "./Navbar/NavbarDesktop";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Activer le blur après 50px de scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`hidden lg:block transition-all duration-300 ${
          isScrolled ? "bg-white backdrop-blur-sm" : "bg-white"
        }`}
      >
        <NavbarDesktop />
      </div>

      <div
        className={`lg:hidden py-1 px-2 rounded-2xl flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "bg-white backdrop-blur-sm" : "bg-white"
        }`}
      >
        <p className="font-one font-bold text-xs text-noir-500">
          FC PLOMBERIE - CHAUFFAGE - SANITAIRE
        </p>
        <NavMobile />
      </div>
    </header>
  );
}
