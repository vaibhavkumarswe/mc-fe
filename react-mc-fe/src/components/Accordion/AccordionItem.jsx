import { useState } from "react";

export default function AccordionItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border m-2 p-4 border-gray-300 py-4 flex flex-col items-start relative transition-all duration-300 rounded-md">
      <h2 className="font-semibold mb-3">
        {item.question}{" "}
        <span
          className="absolute right-4  cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          +
        </span>
      </h2>
      <div
        className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100 p-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}
