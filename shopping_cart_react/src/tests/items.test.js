import { render, screen } from "@testing-library/react";
import Items from "../components/items";

test("renders learn react link", () => {
  render(<Items />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
