import React from "react";
import Link from "next/link";
import type { InferGetStaticPropsType } from "next";

import { pick } from "@/lib/utils";
import { allBlogs } from ".contentlayer/data";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      {posts.map(({ title, summary, slug, publishedAt }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <h2>Title: {title}</h2>
            </a>
          </Link>

          <p>Summary: {summary}</p>

          <time>Published At: {publishedAt}</time>
        </article>
      ))}
    </section>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt"])
  );

  return { props: { posts } };
};

export default Blog;
