import React from "react";

import { Blog } from ".contentlayer/types";

interface Props {
  children: React.ReactNode;
  post: Blog;
}

const BlogLayout = ({ children, post }: Props) => {
  const { title } = post;

  return (
    <section className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>

      <strong>Imad Atyat-Alah</strong>

      <div className="w-full mt-4 prose dark:prose-dark max-w-none">
        {children}
      </div>
    </section>
  );
};

export default BlogLayout;
