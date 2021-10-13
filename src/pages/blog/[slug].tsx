import React, { useMemo } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";

import { getMDXComponent } from "mdx-bundler/client";
import { allBlogs } from ".contentlayer/data";
import { NextSeo } from "next-seo";
import type { Blog } from ".contentlayer/types";

import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/Blog";
import { baseUrl } from "@/lib/constants";

interface Props {
  post: Blog;
}

const Post = ({ post }: Props) => {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );

  const { title, summary, slug } = post;

  const url = `${baseUrl}/blog/${slug}`;

  return (
    <>
      <NextSeo title={title} description={summary} canonical={url} />

      <BlogLayout post={post}>
        <Component components={{ ...MDXComponents }} />
      </BlogLayout>
    </>
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
