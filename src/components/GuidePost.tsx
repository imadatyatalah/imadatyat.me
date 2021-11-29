import React from "react";
import Link from "next/link";

import useSWR from "swr";
import dayjs from "dayjs";

import fetcher from "@/lib/fetcher";

import type { Guides } from ".contentlayer/types";
import type { Views } from "@/types/Views";

type Props = Pick<Guides, "title" | "description" | "slug" | "publishedAt">;

const GuidePost = ({ title, description, slug, publishedAt }: Props) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

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
              {` • `}
              {views} views
            </p>
          </div>

          <p className="text-gray-600 dark:text-grey-300">{description}</p>
        </article>
      </a>
    </Link>
  );
};

export default GuidePost;
