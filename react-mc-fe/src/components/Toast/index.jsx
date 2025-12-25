import { useState, useRef } from "react";
import "./styles.css";

const Toast = () => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef([]);

  const handleDeleteToast = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id);
    });
  };

  const handleAddToast = (type, message) => {
    const id = new Date().getTime().toString();
    setToasts((prevToasts) => {
      return [...prevToasts, { id, type, message }];
    });
    timersRef.current[id] = setTimeout(() => handleDeleteToast(id), 3000);
  };

  return (
    <div>
      <h2>This is a Toast Component</h2>
      <div className="flex flex-col fixed top-10 right-5">
        {toasts?.map((toast) => {
          return (
            <div
              key={toast.id}
              className={`toast bg-${
                toast.type === "success"
                  ? "green"
                  : toast.type === "error"
                  ? "red"
                  : toast.type === "warning"
                  ? "yellow"
                  : "blue"
              }-500 text-white px-4 py-2 rounded-lg shadow-lg gap-2 flex items-center min-w-[200px] justify-between m-1`}
            >
              <span>{toast.message}</span>
              <button
                className="ml-2 text-sm bold"
                onClick={() => handleDeleteToast(toast.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => handleAddToast("success", "This is a success message")}
        >
          Success Toast
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => handleAddToast("error", "This is an error message")}
        >
          Error Toast
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => handleAddToast("warning", "This is a warning message")}
        >
          Warning Toast
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => handleAddToast("info", "This is an info message")}
        >
          Info Toast
        </button>
      </div>
    </div>
  );
};

export default Toast;
