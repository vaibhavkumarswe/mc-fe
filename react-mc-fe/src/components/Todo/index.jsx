import React, { useCallback } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function Todo() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  const handleInputChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        edit: false,
      };
      setTodos((prevTodos) => {
        return [...prevTodos, newTodoItem];
      });
      setNewTodo("");
    }
  }, [newTodo]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    },
    [handleAddTodo],
  );

  const handleEdit = useCallback((id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, edit: !todo.edit };
        }
        return todo;
      });
    });
  }, []);

  const handleEditedTodo = useCallback((e, id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: e.target.value };
        }
        return todo;
      });
    });
  }, []);

  const handleComplete = useCallback((id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  }, []);

  React.useEffect(() => {
    console.log("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log("Parent");

  return (
    <div className="container">
      <h1 className="heading">Todo Component</h1>
      <p>This is a placeholder for the Todo component.</p>
      <div className="flex flex-col mt-4 mx-auto p-4 border rounded min-w-[650px] min-h-[600px]">
        {/* todo input */}
        <TodoInput
          newTodo={newTodo}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          handleAddTodo={handleAddTodo}
        />

        {/* todo list */}
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEditedTodo={handleEditedTodo}
        />
      </div>
    </div>
  );
}
