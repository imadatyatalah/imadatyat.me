import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";

import { allGuides } from ".contentlayer/data";
import { pick } from "@contentlayer/client";

import GuidesPage from "@/modules/GuidesPage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Guides: NextPage<Props> = ({ guides }) => {
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
