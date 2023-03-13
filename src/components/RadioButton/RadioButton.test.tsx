import React from "react";
import { render } from "@testing-library/react";

import RadioButton from "./RadioButton";

describe("RadioButton", () => {
  test("renders the RadioButton component", () => {
    render(
      <RadioButton
        inputID=""
        name=""
        values={[]}
        legend=""
      />
    );
  });
});