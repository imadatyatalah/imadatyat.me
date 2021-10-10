import React from "react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

interface Props {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default GlobalLayout;
