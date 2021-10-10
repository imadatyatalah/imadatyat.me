import React from "react";

import { Blog } from ".contentlayer/types";

interface Props {
  children: React.ReactNode;
  post: Blog;
}

const BlogLayout = ({ children, post }: Props) => {
  return (
    <section>
      <h1>{post.title}</h1>

      <strong>{post.author}</strong>

      {children}
    </section>
  );
};

export default BlogLayout;
