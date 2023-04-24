import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Movies from "./Movies";

afterEach(cleanup);
const setup = () => render(<Movies />);

describe("Testing Movies Component", () => {
  //for the search field
  it("Register search field renders", () => {
    setup();
    const form = screen.getByTestId("searchField");
    expect(form).toBeInTheDocument();
  });

  //for the search button
  it("Register Search button renders", () => {
    setup();
    const form = screen.getByTestId("searchBtn");
    expect(form).toBeInTheDocument();
  });

  //for the pagination
  it("Register next pagination renders", () => {
    setup();
    const form = screen.getByTestId("paginationBtn");
    expect(form).toBeInTheDocument();
  });

  //for the displaying of cards
  it("Register Display Cards", () => {
    setup();
    const form = screen.getByTestId("searchField");
    expect(form).toBeInTheDocument();
  });
});
