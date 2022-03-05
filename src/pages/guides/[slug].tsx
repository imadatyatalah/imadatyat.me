import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allGuides } from "contentlayer/generated";
import type { Guides } from "contentlayer/generated";

import MDXComponents from "@/components/MDXComponents";
import GuideLayout from "@/layouts/Guide";

type Props = { guide: Guides };

const Guide: NextPage<Props> = ({ guide }) => {
  const Component = useMDXComponent(guide.body.code);

  return (
    <GuideLayout guide={guide}>
      <Component components={{ ...MDXComponents }} />
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
