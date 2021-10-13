import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" canonical={baseUrl} />

      <section
        className="flex items-center justify-center"
        data-testid="home-page"
      >
        <h1 className="text-4xl font-semibold leading-relaxed tracking-tight">
          Work In Progress!
        </h1>
      </section>
    </>
  );
};

export default Home;
