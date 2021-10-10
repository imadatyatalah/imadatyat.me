import React from "react";
import Link from "next/link";

interface Props {
  // @TODO: Find a better way.
  post: {
    slug: string;
    title: string;
    summary: string;
    publishedAt: string;
  };
}

const BlogPost = ({ post }: Props) => {
  const { slug, title, summary, publishedAt } = post;

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
