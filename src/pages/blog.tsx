import React from "react";
import type { InferGetStaticPropsType } from "next";

import { allBlogs } from ".contentlayer/data";
import { NextSeo } from "next-seo";

import { pick } from "@/lib/utils";
import { baseUrl } from "@/lib/constants";
import BlogPost from "@/components/BlogPost";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="Friendly blog posts for developers. Especially about React, Next.js, and more!"
        canonical={`${baseUrl}/blog`}
      />

      <section>
        <h1 className="text-3xl font-bold">Blog</h1>

        <div className="flex flex-col items-center my-4 sm:grid sm:grid-cols-2 sm:gap-6 md:gap-10 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image"])
  );

  return { props: { posts } };
};

export default Blog;
