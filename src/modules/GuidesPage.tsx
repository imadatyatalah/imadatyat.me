import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import GuidePost from "@/components/GuidePost";

import type { Guides } from ".contentlayer/types";

interface Props {
  guides: Pick<Guides, "title" | "description" | "slug" | "publishedAt">[];
}

const GuidesPage = ({ guides }: Props) => {
  return (
    <>
      <NextSeo
        title="Guides"
        description="A collection of helpfull guides, Mostly about web technologies like TypeScript, React, Next.js..."
        canonical={`${baseUrl}/guides`}
      />

      <section>
        <h1 className="text-3xl font-bold">Guides</h1>

        <div className="my-4">
          {guides.map((guide) => (
            <GuidePost key={guide.slug} {...guide} />
          ))}
        </div>
      </section>
    </>
  );
};

export default GuidesPage;
