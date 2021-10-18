import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";

const Guides = () => {
  return (
    <>
      <NextSeo title="Guides" canonical={`${baseUrl}/guides`} />

      <section>
        <h1 className="text-3xl font-bold">Guides</h1>
      </section>
    </>
  );
};

export default Guides;
