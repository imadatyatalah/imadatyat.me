import React, { useMemo } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";

import { getMDXComponent } from "mdx-bundler/client";
import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";

import BlogLayout from "@/layouts/Blog";

interface Props {
  post: Blog;
}

const Post = ({ post }: Props) => {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );

  return (
    <section>
      <BlogLayout post={post}>
        <Component />
      </BlogLayout>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  return { props: { post } };
};

export default Post;
