import React from "react";
import Link from "next/link";

import dayjs from "dayjs";

import type { Guides } from ".contentlayer/types";

type Props = Pick<Guides, "title" | "description" | "slug" | "publishedAt">;

const GuidePost = ({ title, description, slug, publishedAt }: Props) => {
  return (
    <Link href={`/guides/${slug}`}>
      <a>
        <article className="w-full mb-8 group">
          <div className="flex flex-col md:justify-between md:flex-row md:items-center md:mb-1">
            <h3 className="mb-px text-xl font-medium md:mb-0 title-hover">
              {title}
            </h3>

            <p className="mb-2 text-sm text-left text-gray-500 dark:text-grey-400 md:text-right md:mb-0">
              {dayjs(publishedAt).format("MMMM D, YYYY")}
            </p>
          </div>

          <p className="text-gray-600 dark:text-grey-300">{description}</p>
        </article>
      </a>
    </Link>
  );
};

export default GuidePost;
