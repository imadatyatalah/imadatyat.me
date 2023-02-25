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
            I&apos;m Imad Atyat-Allah, A Front-end React developer passionate
            about creating beautiful, user-friendly web applications.
          </p>

          <p className="mt-5">
            My fascination with the world of web development began in high
            school, where I discovered a passion for creating fast and
            innovative web applications. Since then, I have dedicated myself to
            continually enhancing my skills and expertise in the field of web
            development.
          </p>
        </div>

        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </>
  );
};

export default AboutLayout;
