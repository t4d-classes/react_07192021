import React from "react";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import { CoverageList } from "./CoverageList";

test("snapshot CoverageList component", () => {

  const coverages = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" },
  ];

  expect(
    renderer.create(
      <CoverageList coverages={coverages}>
        Some Content
      </CoverageList>
    ).toJSON()
  ).toMatchSnapshot();
});

describe("CoverageList component", () => {

  let coverages;

  beforeEach(() => {
    coverages = [
      { id: 1, name: "First" },
      { id: 2, name: "Second" },
      { id: 3, name: "Third" },
    ];
  });

  test("renders CoverageList component", () => {
    const { getByRole, getAllByRole } = render(
      <CoverageList coverages={coverages}>
        <h1>List of Coverages</h1>
      </CoverageList>
    );


    expect(getByRole("banner").innerHTML)
      .toBe("<h1>List of Coverages</h1>");

    const listItems = getAllByRole("listitem");

    expect(listItems.length).toBe(3);

    coverages.forEach((coverage, index) => {
      expect(listItems[index].textContent).toBe(coverage.name);
    });

  });
});
