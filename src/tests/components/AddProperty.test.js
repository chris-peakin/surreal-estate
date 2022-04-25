import React from "react";
import renderer from "react-test-renderer";
import AddPropertyComponent from "../../components/AddPropertyComponent";

test("add properties component renders correctly", () => {
  const testRenderer = renderer.create(<AddPropertyComponent />);
  expect(testRenderer).toMatchSnapshot();
});
