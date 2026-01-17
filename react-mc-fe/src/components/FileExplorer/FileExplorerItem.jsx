import { useState } from "react";

export default function FileExplorerItem({ folderData }) {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="border-l-2 border-l-black pl-3 flex flex-col items-start m-2">
      <h5 className="cursor-pointer items-start" onClick={handleClick}>
        {folderData?.type === "folder" ? "📁" : "📄"}
        <span className="m-2">{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((childData, index) => {
          return <FileExplorerItem key={index} folderData={childData} />;
        })}
    </div>
  );
}
