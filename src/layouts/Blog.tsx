import React from "react";
import type { PropsWithChildren } from "react";

import type { Blog } from ".contentlayer/types";
import { NextSeo } from "next-seo";
import dayjs from "dayjs";

import { baseUrl } from "@/lib/constants";
import TwitterIcon from "@/icons/TwitterIcon";

const ShareViaTwitter = ({ title, slug }: { title: string; slug: string }) => {
  const tweetShareURL = `https://twitter.com/intent/tweet?text=Check out: ${title}&url=${baseUrl}/blog/${slug}%0D%0A&via=ImadAtyat`;

  return (
    <a
      href={tweetShareURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-fuchsia-500 fill-[#D946EF]"
    >
      <TwitterIcon />

      <span className="ml-2">Share via Twitter</span>
    </a>
  );
};

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
          images: [{ url: `${baseUrl}${image}` }],
        }}
      />

      <article className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <header className="w-full">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl md:leading-tight lg:text-[2.5rem]">
            {title}
          </h1>

          <div className="text-sm md:flex md:justify-between md:w-full">
            <p>Imad Atyat-Alah / {dayjs(publishedAt).format("MMMM D, YYYY")}</p>

            <p>{readingTime.text}</p>
          </div>
        </header>

        <div className="w-full my-4 prose dark:prose-dark max-w-none">
          {children}
        </div>

        <footer>
          <ShareViaTwitter title={title} slug={slug} />
        </footer>
      </article>
    </>
  );
};

export default BlogLayout;
