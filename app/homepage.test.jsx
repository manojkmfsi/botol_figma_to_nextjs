import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

jest.mock("../components/common/Header", () => {
  return () => <div>Mock Header</div>;
});

jest.mock("../components/common/Footer", () => {
  return () => <div>Mock Footer</div>;
});

jest.mock("./HeroSection", () => {
  return () => <div>Mock Hero Section</div>;
});

jest.mock("./ProductShowcaseSection", () => {
  return () => <div>Mock Product Showcase Section</div>;
});

jest.mock("./HydrationEssentialsSection", () => {
  return () => <div>Mock Hydration Essentials Section</div>;
});

jest.mock("./AboutUsSection", () => {
  return () => <div>Mock About Us Section</div>;
});

jest.mock("./FAQSection", () => {
  return () => <div>Mock FAQ Section</div>;
});

jest.mock("framer-motion", () => ({
  motion: {
    main: "div",
    div: "div",
  },
}));

describe("HomePage", () => {
  it("renders all the main sections and components", () => {
    render(<HomePage />);

    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
    expect(screen.getByText("Mock Hero Section")).toBeInTheDocument();
    expect(
      screen.getByText("Mock Product Showcase Section"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mock Hydration Essentials Section"),
    ).toBeInTheDocument();
    expect(screen.getByText("Mock About Us Section")).toBeInTheDocument();
    expect(screen.getByText("Mock FAQ Section")).toBeInTheDocument();
  });
});
