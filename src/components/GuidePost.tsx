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
          <div className="flex flex-col justify-between md:flex-row">
            <h2 className="mb-px text-xl font-semibold text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h2>

            <p className="mb-4 text-left text-gray-500 dark:text-grey-400 md:text-right md:mb-0">
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
