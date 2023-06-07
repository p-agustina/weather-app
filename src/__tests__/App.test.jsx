import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("renders SearchBar component", () => {
    render(<App />);
    const searchBarElement = screen.getByLabelText("Location");
    expect(searchBarElement).toBeInTheDocument();
  });

})