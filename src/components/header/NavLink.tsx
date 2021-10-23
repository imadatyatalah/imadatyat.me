import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import cn from "classnames";

interface Props {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: Props) => {
  const { asPath } = useRouter();

  const isCurrentRoute = asPath === href;

  const linkClassName = cn(
    isCurrentRoute
      ? "md:text-gray-800 md:dark:text-gray-200"
      : "md:text-gray-600 md:dark:text-gray-400 md:dark:hover:text-[#dedede]",
    "font-semibold pb-6 flex md:font-medium md:p-1 md:transition-all md:rounded-lg md:inline-block md:px-3 md:py-2 md:hover:bg-gray-200 md:dark:hover:bg-gray-800"
  );

  return (
    <Link href={href}>
      <a className={linkClassName}>{text}</a>
    </Link>
  );
};

export default NavLink;
