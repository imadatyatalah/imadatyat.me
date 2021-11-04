import React from "react";

import { NextSeo } from "next-seo";

import { projects, tags } from "data/projects";
import { baseUrl } from "@/lib/constants";
import ProjectCard from "@/components/ProjectsCard";
import useTags from "src/hooks/useTags";

const Projects = () => {
  const [data, setCurrentTag] = useTags(projects);

  return (
    <>
      <NextSeo title="Projects" canonical={`${baseUrl}/projects`} />

      <section>
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="flex flex-wrap my-4">
          {tags.map((tag) => (
            <button
              className="px-2 py-1 mb-3 mr-3 font-semibold rounded-md lg:transition-all lg:transform bg-fuchsia-700 hover:bg-fuchsia-600 lg:hover:scale-105"
              onClick={() => setCurrentTag(tag)}
              key={tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center my-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {data.length ? (
            data.map((project: any, index: any) => (
              <ProjectCard {...project} key={index} />
            ))
          ) : (
            <p className="font-semibold">No projects has been found!</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
