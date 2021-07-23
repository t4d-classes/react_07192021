import React from "react";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import { MessageBox } from "./MessageBox";

test("snapshot MessageBox component", () => {
  expect(
    renderer.create(
      <MessageBox headerText="Info">
        Some Content
      </MessageBox>
    ).toJSON()
  ).toMatchSnapshot();
});

describe("MessageBox component", () => {
  test("renders MessageBox component", () => {
    const { getByText, getByRole } = render(
      <MessageBox headerText="Info">
        Some Content
      </MessageBox>
    );

    // this is ok
    expect(getByText("Info")).toBeInTheDocument();
    expect(getByText("Some Content")).toBeInTheDocument();

    // but this is better
    expect(getByRole("heading").textContent).toBe("Info");
    expect(getByRole("complementary").textContent).toBe("Some Content");
  });
});
