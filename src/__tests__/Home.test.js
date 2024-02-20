import { render, screen, queryByAttribute, } from '@testing-library/react';
import Home from '../pages/Home'
import { BrowserRouter } from 'react-router-dom'
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
    screen.logTestingPlaygroundURL()
    const testVideo = screen.getElementById("video")
    expect (testVideo).toHaveAttribute("src", "type", Video)
})
})
