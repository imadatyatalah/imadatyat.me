import React from "react";
import type { InferGetStaticPropsType } from "next";

import { allBlogs } from ".contentlayer/data";
import { NextSeo } from "next-seo";

import { pick } from "@/lib/utils";
import BlogPost from "@/components/BlogPost";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title="Blog" />

      <section>
        <h1>Blog</h1>

        {posts.map((post) => (
          <BlogPost post={post} key={post.slug} />
        ))}
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "author"])
  );

  return { props: { posts } };
};

export default Blog;
