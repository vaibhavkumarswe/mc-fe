import { memo } from "react";

export default memo(function TodoList({
  todos,
  handleEdit,
  handleDelete,
  handleComplete,
  handleEditedTodo,
}) {
  console.log("Child-2");
  return (
    <div className="flex flex-col gap-4 mt-3 overflow-auto flex-grow">
      {todos.map((todo, idx) => {
        return (
          <div key={todo.id} className="flex justify-start p-2 items-center">
            {todo.edit ? (
              <input
                type="text"
                value={todo.text}
                className="border border-gray-300 rounded-lg p-2 flex-grow mr-2"
                onChange={(e) => handleEditedTodo(e, todo.id)}
              />
            ) : (
              <span
                className={`self-start border border-gray-300 rounded-lg p-2 flex-grow mr-3 text-wrap transition-all ease-in-out ${todo.completed ? "line-through text-red-500" : "text-teal-600 underline"}`}
              >
                {todo.text}
              </span>
            )}
            <div className="flex gap-2">
              <button
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => handleEdit(todo.id)}
              >
                {todo.edit ? "Save" : "Edit"}
              </button>
              <button
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
              <button
                className="text-green-500 hover:text-green-700 cursor-pointer"
                onClick={() => handleComplete(todo.id)}
              >
                Complete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
});
