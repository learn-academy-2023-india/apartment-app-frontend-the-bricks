import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
})

it("has clickable links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  userEvent.click(screen.getByText("Home"))
  expect(screen.getByText("Home")).toBeInTheDocument()

  userEvent.click(screen.getByText("View Apartments"))
  expect(screen.getByText("View Apartments")).toBeInTheDocument()

  userEvent.click(screen.getByText("My Apartments"))
  expect(screen.getByText("My Apartments")).toBeInTheDocument()

  userEvent.click(screen.getByText("Add Listing"))
  expect(screen.getByText("Add Listing")).toBeInTheDocument()

  userEvent.click(screen.getByText("Sign Out"))
  expect(screen.getByText("Sign Out")).toBeInTheDocument()
})
