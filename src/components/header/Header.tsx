import React, { useState, useEffect } from "react";

import cn from "classnames";

import { CloseIcon, MenuIcon } from "@/icons/MenuIcons";
import Logo from "@/components/Logo";
import NavLink from "./NavLink";

const LINKS = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Guides", href: "/guides" },
  // { title: "Projects", href: "/projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const navClassName = cn(
    isOpen
      ? "absolute h-screen z-10 top-[70px] left-0 w-full bg-[#f7f9fb] dark:bg-[#090117] md:ml-0 md:static md:h-auto md:w-auto md:bg-transparent md:z-0"
      : "hidden md:block"
  );

  return (
    <header
      className="relative flex items-center justify-between h-[70px]"
      id="global-header"
    >
      <Logo />

      <nav className={navClassName}>
        <ul className="flex flex-col md:flex-row">
          {LINKS.map(({ title, href }) => (
            <li
              className="mt-6 ml-8 border-b dark:border-gray-700 md:mt-0 md:border-none"
              onClick={closeMenu}
              key={title}
            >
              <NavLink href={href} text={title} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          type="button"
          className="flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300"
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
