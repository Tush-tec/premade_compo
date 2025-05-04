import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const Carousel = ({
  slides = [],
  autoSlide = false,
  autoSlideInterval = 3000,
  className = '',
  showIndicators = true,
  showArrows = true
}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, current]);

  return (
    <div className={clsx('relative w-full overflow-hidden', className)}>
      {/* Slides */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded">❮</button>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded">❯</button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={clsx(
                'w-3 h-3 rounded-full',
                current === index ? 'bg-white' : 'bg-gray-400'
              )}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
