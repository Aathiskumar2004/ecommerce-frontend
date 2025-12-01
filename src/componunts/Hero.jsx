import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-1">

      {/* AUTO CAROUSEL */}
      <div className="carousel w-full">
        
        <div
          id="item1"
          className={`carousel-item w-full ${index === 1 ? "block" : "hidden"}`}
        >
          <img
            src="https://framerusercontent.com/images/VyXHWaKg5qllLR3ICeYh1L17oc.png"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div
          id="item2"
          className={`carousel-item w-full ${index === 2 ? "block" : "hidden"}`}
        >
          <img
            src="https://img.freepik.com/free-psd/instagram-posts-collection-streetwear-fashion-shopping_23-2150576117.jpg?semt=ais_hybrid&w=740&q=80"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div
          id="item3"
          className={`carousel-item w-full ${index === 3 ? "block" : "hidden"}`}
        >
          <img
            src="https://s3-alpha.figma.com/hub/file/2966175604/7b4459ec-8813-4b42-97a8-94b5a211f0ee-cover.png"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div
          id="item4"
          className={`carousel-item w-full ${index === 4 ? "block" : "hidden"}`}
        >
          <img
            src="https://i.pinimg.com/736x/40/e7/c8/40e7c8771e90c332e9778e62be4d7ccf.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* INDICATOR BUTTONS */}
      <div className="flex w-full justify-center gap-2 py-2">
        <button onClick={() => setIndex(1)} className="btn btn-xs">1</button>
        <button onClick={() => setIndex(2)} className="btn btn-xs">2</button>
        <button onClick={() => setIndex(3)} className="btn btn-xs">3</button>
        <button onClick={() => setIndex(4)} className="btn btn-xs">4</button>
      </div>
    </div>
  );
};

export default Hero;
