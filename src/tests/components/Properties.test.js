import { render } from "@testing-library/react";
import Properties from "../../components/PropertiesComponent";

test("properties page renders", () => {
  const { asFragment } = render(<Properties />);
  expect(asFragment()).toMatchSnapshot;
});
