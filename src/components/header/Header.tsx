import React from "react";
import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";
import NavLink from "./NavLink";

const LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Projects", href: "/projects" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[70px]">
      <nav className="flex">
        <ul className="flex">
          {LINKS.map(({ title, href }) => (
            <li className="mr-8" key={title}>
              <Link href={href} passHref>
                <NavLink>{title}</NavLink>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <DarkModeToggle />
    </header>
  );
};

export default Header;
