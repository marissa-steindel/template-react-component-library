import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    render(
      <Dropdown
        name=""
        selectID=""
        labelText=""
        optionValues={["who","let","the","dogs","out"]}
        disabled={false}
      />
    );
  });
});