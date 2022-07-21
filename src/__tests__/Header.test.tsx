/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { queryByText, render, getByText } from "@testing-library/react";
import { Header } from "../components/Header/Header";

test("displays header with text hello world", async () => {
  const { getByText } = await render(<Header text="hello world" />);
  expect(getByText("hello world")).toBeTruthy();
});

test("displays header with text that is not hello world", async () => {
  const { queryByText } = await render(
    <Header text="this is not hello world" />
  );
  expect(queryByText("hello world")).toBeFalsy();
});
