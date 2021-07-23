import React from "react";

import renderer from "react-test-renderer";

import { CoveragesPage } from "./CoveragesPage";

jest.mock('../hooks/useCoverages');
jest.mock('../components/CoverageList');
jest.mock('../components/CoverageForm');

test("snapshot CoveragesPage component", () => {
  expect(
    renderer.create(
      <CoveragesPage />
    ).toJSON()
  ).toMatchSnapshot();
});
