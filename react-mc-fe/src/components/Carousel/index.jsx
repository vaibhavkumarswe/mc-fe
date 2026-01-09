import { useState, useEffect, useRef } from "react";
import data from "./data.json";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    carouselRef.current = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(carouselRef.current);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen self-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Carousel Component</h1>
      <p>This is a placeholder for the Carousel component.</p>
      <div
        className="relative w-96 h-64 mt-10"
        onMouseEnter={() => clearInterval(carouselRef.current)}
        onMouseLeave={() => {
          carouselRef.current = setInterval(() => {
            nextSlide();
          }, 1000);
        }}
      >
        <img
          src={data[currentIndex].download_url}
          alt={data[currentIndex].author}
          className="w-full h-full object-cover rounded"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
