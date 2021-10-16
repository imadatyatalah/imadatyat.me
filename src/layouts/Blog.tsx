import React from "react";
import Image from "next/image";
import type { PropsWithChildren } from "react";

import { Blog } from ".contentlayer/types";
import { NextSeo } from "next-seo";
import dayjs from "dayjs";

import { baseUrl } from "@/lib/constants";

const BlogLayout = ({ children, post }: PropsWithChildren<{ post: Blog }>) => {
  const { title, publishedAt, readingTime, image, summary, slug } = post;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={`${baseUrl}/blog/${slug}`}
      />

      <article className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header className="w-full">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>

          <div className="text-sm md:flex md:justify-between md:w-full">
            <p>Imad Atyat-Alah / {dayjs(publishedAt).format("MMMM D, YYYY")}</p>

            <p>{readingTime.text}</p>
          </div>

          {image ? (
            <div className="flex mt-9">
              <Image
                src={image}
                width="1000"
                height="571"
                alt="Next.js"
                className="rounded-lg"
              />
            </div>
          ) : null}
        </header>

        <div className="w-full my-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </>
  );
};

export default BlogLayout;
