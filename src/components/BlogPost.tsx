import React from "react";
import Link from "next/link";
import Image from "next/image";

import useSWR from "swr";
import dayjs from "dayjs";

import fetcher from "@/lib/fetcher";

import type { Blog } from ".contentlayer/types";
import type { Views } from "@/types/Views";

type Props = Pick<Blog, "title" | "summary" | "slug" | "publishedAt" | "image">;

const BlogPost = ({ slug, title, summary, publishedAt, image }: Props) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="max-w-sm my-8 sm:max-w-none sm:my-0 group">
          {image ? (
            <div className="flex mb-2">
              <Image
                src={image}
                width="1200"
                height="627"
                alt={title}
                className="rounded-lg"
              />
            </div>
          ) : null}

          <div>
            <p className="text-sm text-gray-600 dark:text-grey-400">
              {dayjs(publishedAt).format("MMMM D, YYYY")} {` • `}
              {views} views
            </p>

            <h3 className="mt-1 mb-2 text-xl font-medium title-hover">
              {title}
            </h3>

            <p className="text-gray-700 dark:text-grey-300">{summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogPost;
