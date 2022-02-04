import React from "react";
import type { PropsWithChildren } from "react";

import type { Blog } from ".contentlayer/types";
import { NextSeo } from "next-seo";
import dayjs from "dayjs";

import { baseUrl } from "@/lib/constants";
import ShareViaTwitter from "@/components/ShareViaTwitter";
import ViewCounter from "@/components/ViewCounter";

const BlogLayout = ({ children, post }: PropsWithChildren<{ post: Blog }>) => {
  const { title, publishedAt, readingTime, image, summary, slug } = post;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={`${baseUrl}/blog/${slug}`}
        openGraph={{
          type: "article",
          article: { publishedTime: publishedAt, authors: [baseUrl] },
          images: [{ url: `${baseUrl}${image}`, height: 627, width: 1200 }],
        }}
      />

      <article className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header className="w-full">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {title}
          </h1>

          <div className="text-sm md:flex md:justify-between md:w-full">
            <p>Imad Atyat-Alah / {dayjs(publishedAt).format("MMMM D, YYYY")}</p>

            <p>
              {readingTime.text} {` • `}
              <ViewCounter slug={slug} />
            </p>
          </div>
        </header>

        <div className="w-full my-4 prose dark:prose-dark max-w-none">
          {children}
        </div>

        <footer>
          <ShareViaTwitter title={title} slug={slug} type="blog" />
        </footer>
      </article>
    </>
  );
};

export default BlogLayout;
