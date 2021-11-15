import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allGuides } from ".contentlayer/data";
import type { Guides } from ".contentlayer/types";

import MDXComponents from "@/components/MDXComponents";
import GuideLayout from "@/layouts/Guide";

const Guide = ({ guide }: { guide: Guides }) => {
  const Component = useMDXComponent(guide.body.code);

  return (
    <GuideLayout guide={guide}>
      <Component components={{ ...MDXComponents } as any} />
    </GuideLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allGuides.map((g) => ({ params: { slug: g.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const guide = allGuides.find((guide) => guide.slug === params?.slug);

  return { props: { guide } };
};

export default Guide;
