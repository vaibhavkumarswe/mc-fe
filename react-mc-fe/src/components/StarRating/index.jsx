import React from "react";

const StartRating = () => {
  const startCount = 5;
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleStarHover = (index) => {
    setHover(index + 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Star Rating Component</h1>
      <p>This is a placeholder for the Star Rating component.</p>
      <div className="flex mt-6">
        {Array.from({ length: startCount }).map((_, index) => (
          <span
            key={index}
            className={`text-2xl cursor-pointer ${
              (hover === 0 && index < rating) || index < hover
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={() => setHover(0)}
          >
            {(hover === 0 && index < rating) || index < hover ? "★" : "☆"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StartRating;
