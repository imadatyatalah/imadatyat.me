import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Blog } from ".contentlayer/types";
import dayjs from "dayjs";

const BlogPost = ({
  slug,
  title,
  summary,
  publishedAt,
  image,
}: Pick<Blog, "title" | "summary" | "slug" | "publishedAt" | "image">) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="my-8 sm:my-0">
          {image ? (
            <div>
              <Image
                src={image}
                width="1000"
                height="571"
                alt="Next.js"
                className="rounded-lg"
              />
            </div>
          ) : null}

          <div>
            <p className="text-[15px] text-gray-600">
              {dayjs(publishedAt).format("MMMM D, YYYY")}
            </p>

            <h2 className="mb-2 text-2xl font-semibold">{title}</h2>

            <p className="text-gray-700">{summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogPost;
