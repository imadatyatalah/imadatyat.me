import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";

import { allBlogs, allGuides } from ".contentlayer/data";
import { pick } from "@contentlayer/client";

import HomePage from "@/modules/HomePage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts, guides }) => {
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
