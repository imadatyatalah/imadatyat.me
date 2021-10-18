import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";

const Projects = () => {
  return (
    <>
      <NextSeo title="Projects" canonical={`${baseUrl}/projects`} />

      <section>
        <h1 className="text-3xl font-bold">Projects</h1>
      </section>
    </>
  );
};

export default Projects;
