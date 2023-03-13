import React from "react";
import { render } from "@testing-library/react";

import Image from "./Image";

describe("Image", () => {
  test("renders the Image component", () => {
    render(
      <Image
        src=""
        alt=""
        height="200"
        width="200"
        disabled={false}
      />
    );
  });
});