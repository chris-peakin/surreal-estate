import React from "react";
import { render } from "@testing-library/react";
import AddPropertyComponent from "../../components/AddPropertyComponent";

test("add properties component renders correctly", () => {
  const { asFragment } = render(<AddPropertyComponent />);
  expect(asFragment()).toMatchSnapshot;
});
