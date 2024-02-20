import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders a footer", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const footer = screen.getByText(/Rod | Garry | Tomas/i);
    expect(footer).toBeInTheDocument();
  });
});
