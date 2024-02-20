import React from "react";
import Video from "../assets/video.mp4"

const Home = () => {
//   const videoOptions = {
//     loop: true,
//     autoPlay: true,
//     muted: true,
//     playsInline: true,
//     disableRemotePlayback: true,
//   }

return (
    <div>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4'/>
      </video>
      <div className="overlay">
        <h1>Hello</h1>
      </div>
    </div>);
}


export default Home;
