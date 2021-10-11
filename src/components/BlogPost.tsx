import React from "react";
import Link from "next/link";

import { Blog } from ".contentlayer/types";

const BlogPost = ({
  slug,
  title,
  summary,
  publishedAt,
}: Pick<Blog, "title" | "summary" | "slug" | "publishedAt">) => {
  return (
    <article className="my-4 bg-blue-400">
      <Link href={`/blog/${slug}`}>
        <a>
          <h2>Title: {title}</h2>
        </a>
      </Link>

      <p>Summary: {summary}</p>
      <p>Author: Imad Atyat-Alah</p>

      <time>Published At: {publishedAt}</time>
    </article>
  );
};

export default BlogPost;
