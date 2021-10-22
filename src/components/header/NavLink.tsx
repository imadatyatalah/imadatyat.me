import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import cn from "classnames";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const { asPath } = useRouter();

  const isCurrentRoute = asPath === href;

  const linkClassName = cn(
    isCurrentRoute
      ? "font-semibold text-gray-800 dark:text-gray-200"
      : "font-normal text-gray-600 dark:text-gray-400",
    "hidden p-1 transition-all rounded-lg md:inline-block sm:px-3 sm:py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
  );

  return (
    <Link href={href}>
      <a className={linkClassName}>{text}</a>
    </Link>
  );
};

export default NavLink;
