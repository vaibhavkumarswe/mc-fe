import { menuItems } from "../data/index";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
      <h1 className="text-2xl font-bold">Welcome to MyApp</h1>
      <p className="mt-4 text-gray-600">
        This is the main content area where you can add your application
        features.
      </p>
      <div className="mt-8 flex flex-wrap gap-6 border-t pt-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="mb-4 border p-4 rounded shadow-md w-60"
            onClick={() => navigate(item.path)}
          >
            <h2 className="text-xl font-semibold">{item.label}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
