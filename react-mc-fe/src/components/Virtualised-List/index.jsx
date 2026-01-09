import { List } from "./data";
import { useState, useCallback } from "react";

const VirtualisedList = () => {
  const itemHeight = 35;
  const containerHeight = 400;
  const totalWidth = 300;
  const overscan = 1;

  const [scrollTop, setScrollTop] = useState([
    0,
    Math.floor(containerHeight / itemHeight),
  ]);
  const visibleList = List.slice(scrollTop[0], scrollTop[1] + overscan);
  const totalHeight = itemHeight * List.length;

  const handleScroll = useCallback((e) => {
    const { scrollTop } = e.currentTarget;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex =
      newStartIndex + Math.floor(containerHeight / itemHeight);
    setScrollTop([newStartIndex, newEndIndex]);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Virtualized List Component</h1>
      <div
        style={{
          height: containerHeight,
          width: totalWidth,
          overflow: "auto",
          backgroundColor: "#f3f4f6",
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          {visibleList.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:bg-gray-100 bg-white flex items-center justify-center border border-gray-200"
                style={{
                  height: itemHeight,
                  position: "absolute",
                  top: (scrollTop[0] + index) * itemHeight,
                  width: "100%",
                }}
              >
                <h2 className="text-xl font-semibold">{item}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualisedList;
