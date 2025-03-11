"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  useEffect(() => {
    setIsOpen(window.innerWidth > 1024 ? false : true);
  }, []);

  return (
    <nav className="max-w-4xl border-b-background-dimmed/50 md:border-b-0 w-full fixed z-50 h-14 flex flex-row justify-between items-center border-b  p-4 bg-background bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90">
      <p className="text-lg font-semibold">
        <Link href="/" className="">
          Raditya Bagaswara
        </Link>
      </p>
      <div className="block lg:hidden">
        <button
          className="btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "invisible opacity-0 lg:visible lg:opacity-100 flex flex-col lg:flex-row -translate-y-10 lg:-translate-y-0"
            : "visible opacity-100  lg:flex flex-col lg:flex-row translate-y-0 pt-5 lg:pt-0"
        } transition-all absolute lg:relative bg-background w-full lg:w-min top-14 pb-5 lg:pb-0  lg:top-0 flex flex-col lg:flex-row gap-6 lg:bg-transparent`}
      >
        <Link href="/" className=" transition-all">
          Home
        </Link>

        <a
          href="https://drive.google.com/drive/folders/1mjSDJyCJJJj-Cwrx8s51eEE3aZRxLcrL?usp=sharing"
          target="_blank"
          className=" transition-all"
          rel="noreferrer"
        >
          Resume
        </a>

        <Link href="/#works" className=" transition-all">
          Works
        </Link>
        <Link href="/#contact" className=" transition-all">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
