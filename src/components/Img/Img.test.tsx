import React from "react";
import { render } from "@testing-library/react";

import Img from "./Img";

describe("Img", () => {
  test("renders the Img component", () => {
    render(<img src="Test source" alt="I am a test image."></img>);
  });
});