import React from "react";
import type { InferGetStaticPropsType } from "next";

import { allGuides } from ".contentlayer/data";
import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import { pick } from "@/lib/utils";
import GuidePost from "@/components/GuidePost";

const Guides = ({ guides }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title="Guides" canonical={`${baseUrl}/guides`} />

      <section>
        <h1 className="text-3xl font-bold">Guides</h1>

        <div className="my-4">
          {guides.map((guide) => (
            <>
              <GuidePost key={guide.slug} {...guide} />
              <GuidePost key={guide.slug} {...guide} />
              <GuidePost key={guide.slug} {...guide} />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const guides = allGuides.map((guide) =>
    pick(guide, ["slug", "title", "description", "publishedAt"])
  );

  const sortedGuides = guides.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { guides: sortedGuides } };
};

export default Guides;
