import React from "react";
import Link from "next/link";

const Logo = () => (
  <div className="select-none">
    <Link href="/">
      <a
        className="text-2xl font-semibold hover:underline"
        aria-label="Imad Atyat-Allah's logo"
      >
        imadatyat.me
      </a>
    </Link>
  </div>
);

export default Logo;
