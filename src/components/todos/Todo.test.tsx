import Todo from "./Todo";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
describe("Login component tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("Renders correctly initial document", async () => {
    render(<Todo />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("allows users to add a todo item", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });
});
