import React from "react";
import type { InferGetStaticPropsType } from "next";

import { allGuides } from ".contentlayer/data";

import { pick } from "@/lib/utils";
import GuidesPage from "@/modules/GuidesPage";

const Guides = ({ guides }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <GuidesPage guides={guides} />;
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
