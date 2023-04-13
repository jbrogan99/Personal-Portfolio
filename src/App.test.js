import { render, screen } from "@testing-library/react";
import { Header } from "./components/header";
import UserContext from "./components/userContext";

test("renders learn react link", () => {
  render(<Header></Header>);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});
