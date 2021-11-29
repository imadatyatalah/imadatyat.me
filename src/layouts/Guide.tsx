import React from "react";
import type { PropsWithChildren } from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import ShareViaTwitter from "@/components/ShareViaTwitter";
import ViewCounter from "@/components/ViewCounter";

import type { Guides } from ".contentlayer/types";

const GuideLayout = ({
  children,
  guide,
}: PropsWithChildren<{ guide: Guides }>) => {
  const { title, image, description, slug, publishedAt } = guide;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${baseUrl}/guides/${slug}`}
        openGraph={{
          type: "article",
          article: { publishedTime: publishedAt, authors: [baseUrl] },
          images: [{ url: `${baseUrl}${image}`, height: 627, width: 1200 }],
        }}
      />

      <article className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-center md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {title}
          </h1>
        </header>

        <div className="w-full my-4 prose dark:prose-dark max-w-none">
          {children}
        </div>

        <footer className="flex justify-between w-full mt-8 font-medium">
          <div>
            <ShareViaTwitter title={title} slug={slug} />
          </div>

          <div>
            <ViewCounter slug={slug} />
          </div>
        </footer>
      </article>
    </>
  );
};

export default GuideLayout;
