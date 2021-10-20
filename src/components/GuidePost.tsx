import React from "react";
import Link from "next/link";

import { Guides } from ".contentlayer/types";
import dayjs from "dayjs";

const GuidePost = ({
  title,
  description,
  slug,
  publishedAt,
}: Pick<Guides, "title" | "description" | "slug" | "publishedAt">) => {
  return (
    <Link href={`/guides/${slug}`}>
      <a>
        <div className="w-full mb-8">
          <div className="flex flex-col md:justify-between md:flex-row md:items-center md:mb-1">
            <h2 className="mb-px text-xl font-semibold text-gray-900 md:text-xl dark:text-gray-100 md:mb-0">
              {title}
            </h2>

            <p className="mb-2 text-left text-gray-500 dark:text-grey-400 md:text-right md:mb-0">
              {dayjs(publishedAt).format("MMMM D, YYYY")}
            </p>
          </div>

          <p className="text-gray-600 dark:text-grey-300">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default GuidePost;
