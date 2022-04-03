import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";

type Props = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
  return (
    <>
      <NextSeo title="About" description="" canonical={`${baseUrl}/about`} />

      <article className="flex flex-col items-start justify-center my-4">
        <header>
          <h1 className="text-3xl font-bold">About Me</h1>
        </header>

        <div>
          <p className="my-5">
            I&apos;m Imad Atyat-Allah, A Self-taught Full Stack developer who
            loves to work with modern web technologies like React, NextJS,
            NestJS, Prisma, TypeScript...
          </p>

          <p className="mt-5">
            I started my journey as a Self-taught web developer in the second
            year of High School when I fall in love by the web development world
            and wanted to build amazing and fast web apps. Ever since I have
            fallen in love with web development and spend most of my days taking
            my skills to the next-level.
          </p>
        </div>

        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </>
  );
};

export default AboutLayout;
