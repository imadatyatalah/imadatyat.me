import React from "react";
import Link from "next/link";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import BlogPost from "@/components/BlogPost";
import ArrowRight from "@/icons/ArrowRight";

const featuredPosts = [
  {
    slug: "why-i-started-octocake",
    title: "Why I started Octocake?",
    summary:
      "Octocake is an open-source social platform created for developers.",
    publishedAt: "2021-10-16",
    image: "/static/images/why-i-started-octocake/banner.png",
  },
];

const Home = () => {
  return (
    <>
      <NextSeo title="Home" canonical={baseUrl} />

      <section data-testid="home-page">
        <div className="my-4">
          <h2 className="text-2xl font-semibold">Featured posts</h2>

          <div className="flex flex-col items-center my-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {featuredPosts.slice(0, 3).map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>

          <p>
            <Link href="/blog">
              <a className="inline-flex text-gray-600 dark:text-gray-400 dark:hover:text-[#dedede]">
                <span className="mr-1">Read all posts</span> <ArrowRight />
              </a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
