import React from 'react'

const Vision = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center sm:px-4 md:px-6 lg:px-8">
                <div className="mt-8 flex items-center justify-center">
                <h1 className="font-bold text-3xl">Our Vision</h1>
                </div>
    
                <img
                src="../public/1738438572106.jpeg"
                alt="Our Mission"
                className="sm:w-2xl md:w-3xl lg:w-4xl p-3.5 rounded-4xl drop-shadow-xl"
            />
    
            <div className="mt-6 max-w-3xl px-4">
                <p style={{ textAlign: 'justify' }} className="text-base">
                To be the leading community for IT graduate students, known for inspiring future leaders in technology through collaboration, innovation, and impactful engagement. We envision a world where our members are equipped to shape the future of IT and make a meaningful difference in their communities.
                </p>
      </div>
    </div>
    
    
      )
}

export default Vision