import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import ApartmentIndex from "../pages/ApartmentIndex"

describe("<ApartmentIndex/>", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex />
      </BrowserRouter>
    )
  })
})

it("renders with a heading", () => {
  render(
    <BrowserRouter>
      <ApartmentIndex />
    </BrowserRouter>
  )
  screen.logTestingPlaygroundURL()
  const heading = screen.getByRole("heading")
  expect(heading).toBeInTheDocument()

  it("renders with text", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const text = screen.getByText(/recent listings/i)
    expect(text).toBeInTheDocument()
  })
})
