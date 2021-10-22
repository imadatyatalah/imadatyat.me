async function redirects() {
  return [
    {
      source: "/oss",
      destination: "https://github.com/imadatyatalah",
      permanent: true,
    },
    {
      source: "/blog/why-i-started-octocake",
      destination: "/blog/why-i-have-started-octocake",
      permanent: true,
    },
  ];
}

module.exports = redirects;
