import React from "react";
import type { InferGetStaticPropsType } from "next";

import { pick } from "@/lib/utils";
import { allBlogs, allGuides } from ".contentlayer/data";
import HomePage from "@/modules/HomePage";

const Home = ({
  posts,
  guides,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <HomePage posts={posts} guides={guides} />;
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image"])
  );

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  const guides = allGuides.map((guide) =>
    pick(guide, ["slug", "title", "description", "publishedAt"])
  );

  const sortedGuides = guides.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts: sortedPosts, guides: sortedGuides } };
};

export default Home;
