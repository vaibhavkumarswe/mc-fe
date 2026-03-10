import { useState } from "react";
import data from "./data";
export default function MultiSelectDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(data.options);
  const handleClick = (id, checked, e) => {
    e.stopPropagation();
    setOptions((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.checked = checked;
        }
        return item;
      });
    });
  };
  return (
    <div className="container">
      <h1 className="heading">MultiSelect Dropdown</h1>
      <div className="flex flex-col gap-2 border border-gray-300 p-4 rounded transition-all duration-300 w-full h-full">
        <div className="flex w-[60%] h-fit border border-gray-300 p-4 rounded">
          <div
            className="flex justify-between items-center w-full"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex gap-2">
              {options.filter((item) => item.checked).length > 0
                ? options
                    .filter((item) => item.checked)
                    .map((item) => {
                      return (
                        <span
                          key={item.id}
                          onClick={(e) => handleClick(item.id, !item.checked, e)}
                          className="bg-gray-200 px-2 py-1 rounded"
                        >
                          {item.label}
                        </span>
                      );
                    })
                : "Select Options"}
            </div>
            <div className="flex gap-3">
              <button>Clear All</button>
              <button>{isOpen ? "▲" : "▼"}</button>
            </div>
          </div>
        </div>
        <div className="flex">
          {isOpen && (
            <div className="flex flex-col gap-2 w-[60%] h-fit border border-gray-300 p-4 rounded">
              {options.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={(e) => handleClick(item.id, !item.checked, e)}
                >
                  <input type="checkbox" checked={item.checked || false} />
                  <label>{item.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
