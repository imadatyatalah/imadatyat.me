import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";

import { allBlogs } from ".contentlayer/data";
import { pick } from "@contentlayer/client";

import BlogPage from "@/modules/BlogPage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ posts }) => {
  return <BlogPage posts={posts} />;
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
