import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug(); // This will log the current state of the DOM to help debug

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
