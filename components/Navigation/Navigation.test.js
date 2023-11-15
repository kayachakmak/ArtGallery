import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("displays Spotlight label on navigation link", () => {
  render(<Navigation />);

  const link = screen.getByRole("link", { name: "Spotlight" });

  expect(link).toBeInTheDocument();
});

test("displays Art Pieces label on navigation link", () => {
  render(<Navigation />);

  const link = screen.getByRole("link", { name: "Art Pieces" });

  expect(link).toBeInTheDocument();
});
