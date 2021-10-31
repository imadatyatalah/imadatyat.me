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
        description="Thoughts on what I'm building and learning."
        canonical={`${baseUrl}/blog`}
      />

      <section>
        <h1 className="text-3xl font-bold">Blog</h1>

        <div className="flex flex-col items-center my-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts: sortedPosts } };
};

export default Blog;
