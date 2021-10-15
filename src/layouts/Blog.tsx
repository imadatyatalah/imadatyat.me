import React from "react";
import Image from "next/image";

import { Blog } from ".contentlayer/types";
import { NextSeo } from "next-seo";
import dayjs from "dayjs";

import { baseUrl } from "@/lib/constants";

interface Props {
  children: React.ReactNode;
  post: Blog;
}

const BlogLayout = ({ children, post }: Props) => {
  const { title, publishedAt, readingTime, image, summary, slug } = post;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={`${baseUrl}/blog/${slug}`}
      />

      <section className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>

        <div className="text-sm md:flex md:justify-between md:w-full">
          <div>
            <p>Imad Atyat-Alah / {dayjs(publishedAt).format("MMMM D, YYYY")}</p>
          </div>

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

        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
