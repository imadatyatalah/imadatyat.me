import React, { useState, useEffect } from "react";
import Link from "next/link";

import { NextSeo } from "next-seo";
import { RoughNotationGroup } from "react-rough-notation";

import { baseUrl } from "@/lib/constants";
import { shuffleArray } from "@/lib/shuffleArray";
import RainbowHighlight, { COLORS } from "@/components/RainbowHighlight";
import BlogPost from "@/components/BlogPost";
import GuidePost from "@/components/GuidePost";
import ArrowRight from "@/icons/ArrowRight";

import type { Blog, Guides } from "contentlayer/generated";

interface Props {
  posts: Pick<Blog, "title" | "summary" | "slug" | "publishedAt" | "image">[];
  guides: Pick<Guides, "title" | "description" | "slug" | "publishedAt">[];
}

const HomePage = ({ posts, guides }: Props) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(shuffleArray(COLORS));
  }, []);

  return (
    <>
      <NextSeo title="Home" canonical={baseUrl} />

      <section>
        <div className="my-4">
          <h1 className="mb-2 text-3xl font-bold">
            Hey there, I&apos;m Imad Atyat-Alah{" "}
            <span className="wave" role="img" aria-label="Waving Hand">
              👋🏼
            </span>
          </h1>

          <RoughNotationGroup show={true}>
            <p>
              I&apos;m{" "}
              <span className="font-semibold">
                <RainbowHighlight color={colors[0]}>
                  Imad Atyat-Alah
                </RainbowHighlight>
              </span>
              , A{" "}
              <span className="font-semibold">
                <RainbowHighlight color={colors[1]}>
                  Self-taught
                </RainbowHighlight>
              </span>{" "}
              Full Stack JavaScript/TypeScript developer with passion for{" "}
              <span className="font-semibold">
                <RainbowHighlight color={colors[2]}>Front-End</RainbowHighlight>
              </span>
              . I enjoy working with TypeScript, React, Next.js, Prisma,
              TailwindCSS...
            </p>
          </RoughNotationGroup>
        </div>

        <div className="my-4">
          <h2 className="text-2xl font-bold">Latest posts</h2>

          <div className="flex flex-col items-center my-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
