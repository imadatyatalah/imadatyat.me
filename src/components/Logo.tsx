import React from "react";
import Link from "next/link";

const Logo = () => (
  <div className="select-none">
    <Link href="/">
      <a className="text-2xl font-semibold">
        <svg
          width="40"
          height="40"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="250"
            height="250"
            rx="50"
            fill="url(#paint0_linear_3_9)"
          />
          <path
            d="M74.1033 198V88.9091H113.308V198H74.1033ZM93.7056 77.5455C88.4026 77.5455 83.8571 75.7936 80.0692 72.2898C76.2814 68.786 74.3874 64.572 74.3874 59.6477C74.3874 54.7235 76.2814 50.5095 80.0692 47.0057C83.8571 43.5019 88.4026 41.75 93.7056 41.75C99.056 41.75 103.601 43.5019 107.342 47.0057C111.13 50.5095 113.024 54.7235 113.024 59.6477C113.024 64.572 111.13 68.786 107.342 72.2898C103.601 75.7936 99.056 77.5455 93.7056 77.5455ZM154.59 200.273C149.097 200.273 144.386 198.355 140.456 194.52C136.574 190.637 134.656 185.926 134.703 180.386C134.656 174.989 136.574 170.372 140.456 166.537C144.386 162.702 149.097 160.784 154.59 160.784C159.798 160.784 164.391 162.702 168.368 166.537C172.393 170.372 174.429 174.989 174.476 180.386C174.429 184.08 173.458 187.441 171.564 190.472C169.718 193.455 167.303 195.846 164.32 197.645C161.337 199.397 158.094 200.273 154.59 200.273Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_9"
              x1="125"
              y1="125"
              x2="298.959"
              y2="-46.9996"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#090117" />
              <stop offset="1" stopColor="#A21CAF" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </Link>
  </div>
);

export default Logo;
