import React from "react";
import type { GetStaticProps, NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allOtherPages } from ".contentlayer/data";
import type { OtherPage } from ".contentlayer/types";

import MDXComponents from "@/components/MDXComponents";
import AboutLayout from "@/layouts/About";

const About: NextPage<OtherPage> = ({ body: { code } }) => {
  const Component = useMDXComponent(code);

  return (
    <AboutLayout>
      <Component components={{ ...MDXComponents }} />
    </AboutLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const about = allOtherPages.find((page) => page.slug === "about")!;

  return { props: about };
};

export default About;
