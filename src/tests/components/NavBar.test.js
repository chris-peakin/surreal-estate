import { render } from "@testing-library/react";
import NavBar from "../../components/NavBarComponent";

test("navbar renders correctly", () => {
  const { asFragment } = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});
