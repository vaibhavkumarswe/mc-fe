import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        console.log("prev", prev);
        if (prev === 100) {
          clearInterval(interval);
        }
        return Math.min(prev + 10, 100);
      });
    }, 500);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Progress Bar Component</h1>
      <p>This is a placeholder for the Progress Bar component.</p>
      {show && (
        <div className="mt-6">
          <div className="w-64 h-6 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 w-full"
              style={{ transform: `translateX(${progress - 100}%)` }}
            ></div>
          </div>
          <p className="mt-2 text-center">{progress}%</p>
        </div>
      )}
      <div className="flex">
        Toggle Progress Bar
        <input
          type="checkbox"
          className="ml-2"
          onClick={() => setShow(!show)}
          value={show}
        />
      </div>
    </div>
  );
}
