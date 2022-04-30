import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../components/NavBarComponent";

test("navbar renders correctly", () => {
  const testRenderer = renderer.create(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(testRenderer).toMatchSnapshot();
});
