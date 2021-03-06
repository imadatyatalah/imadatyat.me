import React from "react";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";

const Custom404: NextPage = () => (
  <>
    <NextSeo title="404" />

    <section className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-semibold leading-relaxed tracking-tight">
          404 - Page Not Found
        </h1>
      </div>
    </section>
  </>
);

export default Custom404;
