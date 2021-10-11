import React from "react";
import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";
import NavLink from "./NavLink";

const LINKS = ["about", "blog", "projects"];
const SOCIAL_LINKS = [
  { title: "Github", href: "https://github.com/imadatyatalah" },
  { title: "Twitter", href: "https://twitter.com/ImadAtyat" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[70px]">
      <div>
        <Link href="/">
          <a>
            <span>Imad Atyat-Alah</span>
          </a>
        </Link>
      </div>

      <div className="flex items-center">
        <nav className="flex">
          <ul className="flex">
            {LINKS.map((link) => (
              <li className="mx-4 capitalize" key={link}>
                <Link href={`/${link}`} passHref>
                  <NavLink>{link}</NavLink>
                </Link>
              </li>
            ))}

            <div className="text-grey-400">&bull;</div>

            {SOCIAL_LINKS.map(({ title, href }) => (
              <li className="mx-4" key={title}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
