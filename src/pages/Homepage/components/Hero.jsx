import React from 'react'

const Hero = () => {
  return (
    
    <div className="relative h-screen w-full overflow-hidden sm:px-4 md:px-6 lg:px-8">
    {/* Background Video */}
            <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover scale-110"
        src="../public/TMCVideo.mp4" // Update with your video file path
        autoPlay
        loop
        muted
        playsInline
        />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-purple-950/90"></div>


    {/* Content */}
    <div className="relative flex items-center justify-center h-full w-full text-center text-white px-4">
      <div>
        <h1 className="sm:text-6xl md:text-7xl lg:text-9xl font-bold">Tech Masters Club</h1>
        <p className="mt-4 text-xl">Connect. Collaborate. Innovate.</p>
      </div>
    </div>
  </div>
  )
}

export default Hero