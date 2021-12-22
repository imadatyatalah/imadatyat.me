import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";

import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/Blog";

type Props = { post: Blog };

const Post: NextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component components={{ ...MDXComponents } as any} />
    </BlogLayout>
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
