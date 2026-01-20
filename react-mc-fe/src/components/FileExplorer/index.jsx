import data from "./data";
import { useState } from "react";
import FileExplorerItem from "./FileExplorerItem";

export default function FileExplorer() {
  return (
    <div className="container">
      <h1 className="heading">File Explorer</h1>
      <FileExplorerItem folderData={data} />
    </div>
  );
}
