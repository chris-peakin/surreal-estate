import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the app correctly", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot;
});
