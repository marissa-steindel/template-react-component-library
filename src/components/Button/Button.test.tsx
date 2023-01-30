// import React from the node_modules
import React from "react";
// import the render method from the React Testing Library
import { render } from "@testing-library/react";
// import the Button.tsx component from the current directory
import Button from "./Button";

// the test
// to know more about tests, read the React Testing Library documentation
describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});