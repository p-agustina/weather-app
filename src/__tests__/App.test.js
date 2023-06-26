// import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

test("should render SearchBar component", () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByTestId("searchbar-test");
    expect(searchBarElement).toBeInTheDocument();
  });