import React from "react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main id="skip">{children}</main>
    <Footer />
  </>
);

export default GlobalLayout;
