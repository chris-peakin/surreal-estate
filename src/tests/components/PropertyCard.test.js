import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCardComponent";

describe("PropertyCard", () => {
  const houseInfo = {
    title: "2bedhouse",
    type: "Detached",
    bedrooms: 2,
    bathrooms: 1,
    price: 100000,
    city: "Manchester",
    email: "joebloggs@gmail.com",
  };

  const { asFragment, getByText, getByTestId } = render(
    <PropertyCard houseInfo={houseInfo} />
  );

  test("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  test("provided prop has correct values", () => {
    expect(houseInfo.title).toBe("2bedhouse");
    expect(houseInfo.type).toBe("Detached");
    expect(houseInfo.bedrooms).toBe(2);
    expect(houseInfo.bathrooms).toBe(1);
    expect(houseInfo.price).toBe(100000);
    expect(houseInfo.city).toBe("Manchester");
    expect(houseInfo.email).toBe("joebloggs@gmail.com");
  });

  test("renders correct value for props", () => {
    expect(getByText(houseInfo.title)).toHaveClass("property-card__title");
  });
});
