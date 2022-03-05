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

        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </>
  );
};

export default AboutLayout;
