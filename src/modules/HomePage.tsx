import React from "react";
import Link from "next/link";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import BlogPost from "@/components/BlogPost";
import GuidePost from "@/components/GuidePost";
import ArrowRight from "@/icons/ArrowRight";

import type { Blog, Guides } from "contentlayer/generated";

interface Props {
  posts: Pick<Blog, "title" | "summary" | "slug" | "publishedAt" | "image">[];
  guides: Pick<Guides, "title" | "description" | "slug" | "publishedAt">[];
}

const HomePage = ({ posts, guides }: Props) => {
  return (
    <>
      <NextSeo title="Home" canonical={baseUrl} />

      <section>
        <div className="my-4">
          <h1 className="mb-2 text-3xl font-bold">
            Hey, I&apos;m Imad{" "}
            <span className="wave" role="img" aria-label="Waving Hand">
              👋🏼
            </span>
          </h1>

          <p className="my-4">
            A Front-end React developer passionate about creating beautiful,
            user-friendly web applications.
          </p>

          <p>
            P.S. this website is open-source and available on{" "}
            <a
              href="http://github.com/imadatyatalah/imadatyat.me"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline font-medium transition-all text-fuchsia-700 dark:text-fuchsia-500 hover:underline"
            >
              Github
            </a>
            .
          </p>
        </div>

        <div className="my-4">
          <h2 className="text-2xl font-bold">Latest posts</h2>

          <div className="flex flex-col items-left my-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>

          <p>
            <Link href="/blog">
              <a className="inline-flex text-gray-600 dark:text-gray-400 dark:hover:text-[#dedede]">
                <span className="mr-1">View all posts</span> <ArrowRight />
              </a>
            </Link>
          </p>
        </div>

        <div className="my-4">
          <h2 className="text-2xl font-bold">Latest guides</h2>

          <div className="my-4">
            {guides.map((guide) => (
              <GuidePost key={guide.slug} {...guide} />
            ))}
          </div>

          <p>
            <Link href="/guides">
              <a className="inline-flex text-gray-600 dark:text-gray-400 dark:hover:text-[#dedede]">
                <span className="mr-1">View all guides</span> <ArrowRight />
              </a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
