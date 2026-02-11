import data from "./data";
import { useEffect } from "react";
import { useState } from "react";

export default function TrafficLights() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setActive((prev) => {
        return (prev + 1) % data.lights.length;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, []);
  return (
    <div className="container items-center">
      <h1 className="heading">Traffic Lights</h1>
      <div className="flex gap-4 border border-gray-300 p-4 rounded w-fit transition-all duration-300">
        {data.lights.map((light, idx) => {
          const isActive = active === idx;
          return (
            <div
              key={light.key}
              className={`${isActive ? `bg-${light.color}-500` : "bg-gray-300"} text-white p-4 h-32 w-32 rounded-full flex items-center justify-center`}
            >
              {light.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
