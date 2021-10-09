import React from "react";

interface Props {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: Props) => (
  <>
    <header></header>
    <main>{children}</main>
    <footer></footer>
  </>
);

export default GlobalLayout;
