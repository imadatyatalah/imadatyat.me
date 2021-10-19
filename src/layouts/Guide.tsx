import React from "react";
import type { PropsWithChildren } from "react";

import type { Guides } from ".contentlayer/types";
import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";

const GuideLayout = ({
  children,
  guide,
}: PropsWithChildren<{ guide: Guides }>) => {
  const { title, image, description, slug } = guide;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${baseUrl}/guides/${slug}`}
        openGraph={{
          article: { authors: [baseUrl] },
          images: [{ url: `${baseUrl}${image}` as string }],
        }}
      />

      <article className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header className="w-full">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
        </header>

        <div className="w-full my-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </>
  );
};

export default GuideLayout;
