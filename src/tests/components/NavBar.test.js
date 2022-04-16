import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../components/NavBarComponent";

test("navbar renders correctly", () => {
  render(
    <BrowserRouter>
      <NavBar button={() => "test"} />
    </BrowserRouter>
  );
  const navElement = screen.getByText(/View Properties/);
  expect(navElement).toBeInTheDocument();
});
