import React from "react";
import renderer from "react-test-renderer";
import NavBar from "../../components/NavBarComponent";

test("navbar renders correctly", () => {
  const testRenderer = renderer.create(<NavBar />);
  expect(testRenderer).toMatchSnapshot();
});
