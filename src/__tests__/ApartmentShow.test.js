import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockApartments from "../mockApartments"
import ApartmentShow from "../pages/ApartmentShow"

describe("<ApartmentShow />", () => {
  it("renders one apartment", () => {
    const apartment = "1"
    render(
      <MemoryRouter initialEntries={[`/ApartmentShow/${apartment}`]}>
        <Routes>
          <Route
            path="/ApartmentShow/:id"
            element={<ApartmentShow apartments={mockApartments} />}
          />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText(/Per Month/i)).toBeInTheDocument()
    expect(screen.getByText(/101 rimrock, san diego, ca/i)).toBeInTheDocument()
    expect(screen.getByText(/2 bedroom, 2 bath/i)).toBeInTheDocument()
    expect(screen.getByText(/pets: yes!/i)).toBeInTheDocument()
    expect(screen.getByText(/Details:/i)).toBeInTheDocument()
  })
})
