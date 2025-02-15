import React from 'react'

const Mission = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center sm:px-4 md:px-6 lg:px-8">
            <div className="mt-8 flex items-center justify-center">
            <h1 className="font-bold text-3xl">Our Mission</h1>
            </div>

            <img
            src="../public/1738438573561.jpeg"
            alt="Our Mission"
            className="sm:w-2xl md:w-3xl lg:w-4xl p-3.5 rounded-4xl drop-shadow-xl"
        />

        <div className="mt-6 max-w-3xl px-4">
            <p style={{ textAlign: 'justify' }} className="text-base">
            Our mission is to empower IT graduate students to excel academically and professionally. We cultivate deep connections, ignite innovation, and deliver exceptional support—creating a dynamic ecosystem where continuous learning, dedicated mentorship, and technological breakthroughs flourish.
            </p>
  </div>
</div>


  )
}

export default Mission