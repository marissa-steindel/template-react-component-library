import React from "react";
import { render } from "@testing-library/react";

import HeroImage from "./HeroImage";

describe("HeroImage", () => {
  test("renders the HeroImage component", () => {
    render(
      <HeroImage
        src=""
        alt=""
        title=""
      />
    );
  });
});