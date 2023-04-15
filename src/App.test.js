import { render, screen } from "@testing-library/react";
import { Header } from "./components/header";
import userContextHorizontal from "./components/userContextHorizontal";

test("renders learn react link", () => {
  render(<Header></Header>);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});
