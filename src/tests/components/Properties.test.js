import React from "react";
import { render, screen } from "@testing-library/react";
import Properties from "../../components/PropertiesComponent";

test("properties page renders", () => {
  const { asFragment } = render(<Properties />);
  expect(asFragment()).toMatchSnapshot();

  // render(<Properties />);

  // const navElement = screen.getByText(/Sort By Price Ascending/);
  // expect(navElement).toBeInTheDocument();
});
