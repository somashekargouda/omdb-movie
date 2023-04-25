import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Movies from "./Movies";

afterEach(cleanup);
const setup = () => render(<Movies />);

describe("Testing Movies Component", () => {
  //for the search field
  it("Movie search field renders", () => {
    setup();
    const form = screen.getByTestId("searchField");
    expect(form).toBeInTheDocument();
  });

  //for the search button
  it("Movie Search button renders", () => {
    setup();
    const form = screen.getByTestId("searchBtn");
    expect(form).toBeInTheDocument();
  });

  //for the pagination
  it("Movie next pagination button renders", () => {
    setup();
    const form = screen.getByTestId("paginationBtn");
    expect(form).toBeInTheDocument();
  });

  //for the displaying of cards
  it("Movie Display Cards", () => {
    setup();
    const form = screen.getByTestId("searchField");
    expect(form).toBeInTheDocument();
  });

  //for watchlist button
  it("Movie Watchlist button", () => {
    setup();
    const form = screen.getByTestId("watchlistBtn");
    expect(form).toBeInTheDocument();
  });
});
