import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatusBadge from "@/components/ui/status-badge";

describe("StatusBadge", () => {
  it("renders Active for active status", () => {
    render(<StatusBadge status="active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders Inactive for inactive status", () => {
    render(<StatusBadge status="inactive" />);
    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });
});
