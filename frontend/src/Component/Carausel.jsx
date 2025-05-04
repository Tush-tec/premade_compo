import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

const Carousel = ({
  slides = [],
  autoSlide = false,
  autoSlideInterval = 3000,
  className = '',
  showIndicators = true,
  showArrows = true,
  animation = 'slide', // "slide" or "fade"
  responsive = true,
}) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, current]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide(); // swipe left
    if (diff < -50) prevSlide(); // swipe right
  };

  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden',
        responsive && 'max-w-full h-auto',
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className={clsx(
          animation === 'slide' && 'flex transition-transform duration-500 ease-in-out',
          animation === 'fade' && 'relative'
        )}
        style={animation === 'slide' ? { transform: `translateX(-${current * 100}%)` } : {}}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(
              animation === 'slide' && 'w-full flex-shrink-0',
              animation === 'fade' &&
                'absolute top-0 left-0 w-full transition-opacity duration-700',
              animation === 'fade' && (index === current ? 'opacity-100 z-10' : 'opacity-0 z-0')
            )}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
          >
            ❯
          </button>
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
