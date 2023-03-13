// import React from the node_modules
import React from "react";
// import the named render method from the React Testing Library
import { render } from "@testing-library/react";
// import the default Button.tsx component from the current directory
import Button from "./Button";

// the test
// to know more about tests, read the React Testing Library documentation
describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button text="Hello world!" color="blue" fontColor="pink"/>);
  });
});