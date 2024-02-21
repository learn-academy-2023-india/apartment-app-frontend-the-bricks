import React from 'react'
import Video from '../assets/video.mp4'

const Home = () => {
  return (
    <div className='video'>
      <video autoPlay loop muted playsInline id="video">
        <source role="video" src={Video} type="video/mp4" />
      </video>
        <div className="overlay">
          <h1 className="title">Welcome to The Bricks</h1>
        </div>
    </div>
  )
}

export default Home
