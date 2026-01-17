import data from "./data";
import { useState } from "react";
import FileExplorerItem from "./FileExplorerItem";

export default function FileExplorer() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen flex flex-col items-start overflow-auto mb-10">
      <h1 className="text-3xl font-bold mb-6">File Explorer</h1>
      <FileExplorerItem folderData={data} />
    </div>
  );
}
