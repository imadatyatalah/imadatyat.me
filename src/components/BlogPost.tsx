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
        <article className="max-w-sm my-8 sm:max-w-none sm:my-0 group">
          {image ? (
            <div className="flex mb-2">
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
            <p className="text-sm text-gray-600 dark:text-grey-400">
              {dayjs(publishedAt).format("MMMM D, YYYY")}
            </p>

            <h2 className="mt-1 mb-2 text-xl font-semibold lg:group-hover:text-fuchsia-700 lg:dark:group-hover:text-fuchsia-500 lg:transition-all">
              {title}
            </h2>

            <p className="text-gray-700 dark:text-grey-300">{summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogPost;
