import React from "react";

const SOCIAL_LINKS = [
  { title: "Github", href: "https://github.com/imadatyatalah" },
  { title: "Twitter", href: "https://twitter.com/ImadAtyat" },
];

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <p className="text-sm">
        &copy; 2021-present Imad Atyat-Alah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
