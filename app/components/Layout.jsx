"use client"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";

export default function Layout({ children }) {
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

  
    return (
      <>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        <Transition
          as={Fragment}
          show={showNav}
          enter="transform transition duration-[400ms]"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform duration-[400ms] transition ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Sidebar showNav={showNav} />
        </Transition>
        <main
          className={`transition-all duration-[400ms] ${
            showNav && !isMobile ? "pl-56" : ""
          }`}
        >
          <div>{children}</div>
        </main>
      </>
    );
  }
  