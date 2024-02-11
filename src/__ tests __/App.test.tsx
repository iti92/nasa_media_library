import "@testing-library/jest-dom";
import '../__mocks__/matchMedia.mock.js';
import { render } from "@testing-library/react";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
