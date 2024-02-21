import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import Video from "../assets/video.mp4"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  it("renders a video", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const testVideo = screen.getByRole("video")
    expect(testVideo).toHaveAttribute("src", Video)
  })

  it("it renders  a heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const heading = screen.getByRole("heading", {
      name: /hello/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
