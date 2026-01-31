import React from "react";
import tabsData from "./data";

export default function Tabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="container">
      <h1 className="heading">Tabs Component</h1>
      <p>This is a placeholder for the Tabs component.</p>
      <div className="flex gap-4 border-b pb-4">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white rounded  ${index === activeTab ? "bg-green-700 hover:bg-green-800" : "bg-blue-700 hover:bg-blue-800"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabsData[activeTab].content}</div>
    </div>
  );
}
