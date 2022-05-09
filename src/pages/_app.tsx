import React from "react";
import Router from "next/router";
import type { AppProps } from "next/app";

import Global from "@/layouts/Global";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";

import SEO from "next-seo.config";

import "nprogress/nprogress.css";
import "@/styles/globals.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      {/* @ts-ignore */}
      <ThemeProvider forcedTheme="dark" attribute="class">
        <Global>
          <Component {...pageProps} />
        </Global>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
