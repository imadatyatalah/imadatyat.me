import React from "react";
import Link from "next/link";

import NavLink from "./NavLink";

const LINKS = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Projects", href: "/projects" },
  { title: "Guides", href: "/guides" },
];

const Header = () => {
  return (
    <header
      className="flex items-center justify-between h-[70px]"
      id="global-header"
    >
      <div>
        <Link href="/">
          <a className="text-2xl font-semibold">Imad Atyat-Alah</a>
        </Link>
      </div>

      <nav className="flex">
        <ul className="flex">
          <li>
            <a href="#skip" className="skip-nav">
              Skip to content
            </a>
          </li>

          {LINKS.map(({ title, href }) => (
            <li className="ml-8" key={title}>
              <NavLink href={href} text={title} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
