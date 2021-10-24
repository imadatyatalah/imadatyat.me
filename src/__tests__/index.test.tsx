import React from "react";

import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Featured posts",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<Home />);

    expect(screen.getByTestId("home-page")).toMatchSnapshot();
  });
});
