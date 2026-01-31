import React, { memo } from "react";

export default memo(function TodoInput({
  newTodo,
  handleInputChange,
  handleKeyDown,
  handleAddTodo,
}) {

  console.log("Child-1");
  return (
    <div className="flex border-gray-300 border-b pb-3">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 flex-grow mr-2"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
      >
        Add
      </button>
    </div>
  );
});
