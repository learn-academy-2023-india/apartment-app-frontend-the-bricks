import React from 'react'
import notFoundImage from '../assets/notFoundImage.jpeg'

const NotFound = () => {
  return (
    <>
      <div className="not-found-background">
        <img
          src={notFoundImage}
          alt="404 not found"
          className="not-found-image"
        />
      </div>
    </>
  )
}

export default NotFound
