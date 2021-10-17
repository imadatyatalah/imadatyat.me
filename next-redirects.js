async function redirects() {
  return [
    {
      source: "/oss",
      destination: "https://github.com/imadatyatalah",
      permanent: true,
    },
  ];
}

module.exports = redirects;
