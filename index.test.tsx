import { CdsButton } from "@cds/react/button";
import { render, screen } from "@testing-library/react";
import React from "react";

test("should make sure the button is disabled", () => {
  render(<CdsButton disabled>Foo</CdsButton>);
  expect(screen.getByText("Foo")).toBeDisabled();
});
