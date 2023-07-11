import React from 'react';
import heroImage from '../Pictures/heroImage.jpg';

function Hero(): JSX.Element {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <img
            className="w-full h-auto"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

