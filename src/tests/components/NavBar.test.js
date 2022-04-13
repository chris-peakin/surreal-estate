import { render } from "@testing-library/react";
import NavBarComponent from "../../components/NavBarComponent";

test("navbar renders correctly", () => {
  const { asFragment } = render(<NavBarComponent />);
  expect(asFragment()).toMatchSnapshot;
});
